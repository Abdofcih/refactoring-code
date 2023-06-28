import { PaymentProvider } from './paymentProvider.interface';

export class PayMobProvider implements PaymentProvider {
  constructor(){
  }
  public async initiatePayment(amount: number): Promise<any> {
    // Implementation specific to PayMob
    // Initiate payment and return the payment ID
    return new Promise((resolve,reject)=>{
      console.log(`paymob payment fulfilled with amount ${amount} `);
      resolve(`paymob-amount-${amount} `)
    })
  }

  public async verifyPayment(paymentId: string): Promise<boolean> {
    // Implementation specific to PayMob
    // Verify payment status using the payment ID
    return new Promise((resolve,reject)=>{
        resolve(true)
    })
  }
}