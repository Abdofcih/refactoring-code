import { PaymentProvider } from './paymentProvider.interface';
import stripeSDK from 'stripe';
export class StripeProvider implements PaymentProvider {
  private stripe: any;
  constructor(){
    let key = process.env.STRIP_API_KEY;
    this.stripe = new stripeSDK(key, { apiVersion: '2022-11-15'} );
  }
  public  initiatePayment = async(amount: number): Promise<any> => {

    const paymentIntent = await this.stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      // Add other necessary payment details
    });
    const paymentId = paymentIntent.id;
    const checkoutURL = await this.createPaymentSession(paymentId);
    return new Promise(async(resolve,reject)=>{
        console.log(`${paymentId} ------ stripe payment fulfilled with amount ${amount} `);
       
        resolve({paymentId,checkoutURL})
    })
  }

  public  verifyPayment = async (paymentId: string): Promise<boolean> => {
    const paymentIntent = await this.stripe.paymentIntents.retrieve(paymentId);
    const isPaymentVerified = paymentIntent.status === 'succeeded';
   console.log(`isPaymentVerified : ${isPaymentVerified}`);
   console.log(paymentIntent);
   
    return new Promise((resolve,reject)=>{
        resolve(isPaymentVerified)
    })
  }

  private createPaymentSession  = async(paymentId:string)=>{
    console.log(`paymentIddddddddddddd `,paymentId);
    
    const session = await this.stripe.checkout.sessions.create({
      payment_method_types: ['card'],
       line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'T-shirt',
            },
            unit_amount: 1000,
          },
          quantity: 9,
        },
      ], 
      mode: 'payment',
      success_url: 'https://fast.com/',
      cancel_url: 'https://your-website.com/cancel',
      metadata: {
        paymentId: paymentId,
      },
    });
    console.log(`createPaymentSession `,session);
    const checkoutURL=session.url;
    return {checkoutURL,paymentId};
  }
}