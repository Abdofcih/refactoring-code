export interface PaymentProvider {
    initiatePayment(amount: number): Promise<any>;
    verifyPayment(paymentId: string): Promise<boolean>;
  }