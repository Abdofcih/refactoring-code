import  {  Request, Response} from "express"

import { PaymentService } from "./payment.service";
import { StripeProvider } from "./models/stripe";
import { PayPalProvider } from "./models/paypal";
import { PayMobProvider } from "./models/paymod";



export class PaymentController {
  private  paypalProvider:PayPalProvider
  private  paymentProviders:any
  private  stripeProvider:StripeProvider
  private  paymobProvider:PayMobProvider
    constructor(){
      // Create instances of the payment providers
         this.paypalProvider = new PayPalProvider();
         this.stripeProvider = new StripeProvider();
         this.paymobProvider = new PayMobProvider();

        // Define the available payment providers
          this.paymentProviders = {
          paypal: this.paypalProvider,
          stripe: this.stripeProvider,
          paymob: this.paymobProvider,
       };
          console.log("const : this.paymentProviders",this.paymentProviders);

    }
    public initiatePayment = async (req: Request, res: Response): Promise<any> =>  {
        const amount = req.body? req.body['amount'] : 0
        const provider = req.body? req.body['provider'] : 'stripe'
        console.log("req.body",req.body);
        console.log("amount, provider",provider);
        try {
          if (!this.paymentProviders.hasOwnProperty(provider)) {
            res.status(400).json({ error: 'Invalid payment provider.' });
            return;
          }
      
          const distProvider = this.paymentProviders[provider]
          const paymentService = new PaymentService(distProvider);
          
          const checkoutData = await paymentService.initiatePayment(amount);
          res.json(checkoutData);
        } catch (error) {
          res.status(500).json({ error:error.message || 'Failed to initiate payment.' });
        }
     
      }
    
      public  verifyPayment = async (req: Request, res: Response): Promise<any> => {
        const paymentId =  req.params['paymentId'] || 'defualt-id';
        const provider = req.params['provider'] || 'stripe';
        try {
          const paymentService = new PaymentService(this.paymentProviders[provider]);
          const isPaymentVerified = await paymentService.verifyPayment(paymentId);
          res.json({ verified: isPaymentVerified });
        } catch (error) {
          res.status(500).json({ error: 'Failed to verify payment.' });
        }
      }
}