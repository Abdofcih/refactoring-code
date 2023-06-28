import { PaymentProvider } from './models/paymentProvider.interface';

export class PaymentService {
  private readonly paymentProvider: PaymentProvider;

  constructor(paymentProvider: PaymentProvider) {
    this.paymentProvider = paymentProvider;
  }

  public async initiatePayment(amount: number): Promise<string> {
    console.log("init payment with amount",amount);
    
    return this.paymentProvider.initiatePayment(amount);
  }

  public async verifyPayment(paymentId: string): Promise<boolean> {
    return this.paymentProvider.verifyPayment(paymentId);
  }
}