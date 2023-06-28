import { PaymentProvider } from './paymentProvider.interface';

export class PayPalProvider implements PaymentProvider {
  constructor(){
  }
  public async initiatePayment(amount: number): Promise<any> {
    // Implementation specific to PayPal
    // Initiate payment and return the payment ID
    return new Promise((resolve,reject)=>{
      console.log(`paypal payment fulfilled with amount ${amount} `);
        resolve(`paypal-amount-${amount} `)
    })
  }

  public async verifyPayment(paymentId: string): Promise<boolean> {
    // Implementation specific to PayPal
    // Verify payment status using the payment ID
    return new Promise((resolve,reject)=>{
        resolve(true)
    })
  }
}