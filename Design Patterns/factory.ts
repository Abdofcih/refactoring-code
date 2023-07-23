// Product Interface
interface PaymentMethod {
  pay(amount: number): string;
  verifyPayment(paymentId: string): boolean;
}

// Concrete Product: Credit Card Payment
class CreditCardPayment implements PaymentMethod {
  pay(amount: number): string {
    const paymentId = this.generatePaymentId(); // Assuming payment ID generation logic
    const paymentLink = `https://example.com/payments/${paymentId}`;
    console.log(`Paid $${amount} using Credit Card. Payment Link: ${paymentLink}`);
    return paymentLink;
  }

  verifyPayment(paymentId: string): boolean {
    // Perform credit card payment verification logic here
    return true; // Placeholder verification result
  }

  private generatePaymentId(): string {
    // Generate a unique payment ID
    return "CC_" + Math.random().toString(36).substr(2, 9);
  }
}

// Concrete Product: PayPal Payment
class PayPalPayment implements PaymentMethod {
  pay(amount: number): string {
    const paymentId = this.generatePaymentId(); // Assuming payment ID generation logic
    const paymentLink = `https://example.com/payments/${paymentId}`;
    console.log(`Paid $${amount} using PayPal. Payment Link: ${paymentLink}`);
    return paymentLink;
  }

  verifyPayment(paymentId: string): boolean {
    // Perform PayPal payment verification logic here
    return true; // Placeholder verification result
  }

  private generatePaymentId(): string {
    // Generate a unique payment ID
    return "PP_" + Math.random().toString(36).substr(2, 9);
  }
}

// Factory
class PaymentFactory {
  createPaymentMethod(type: string): PaymentMethod {
    switch (type) {
      case 'creditcard':
        return new CreditCardPayment();
      case 'paypal':
        return new PayPalPayment();
      default:
        throw new Error('Invalid payment method.');
    }
  }
}

// In the payment controller
function pay(){
    const factory = new PaymentFactory();

    // Get the payment method type from the request data (e.g., "creditcard" or "paypal")
    // const paymentMethodType = req.body.paymentMethod; // Assuming this comes from the request
    const paymentMethodType = "creditcard"; // Assuming this comes from the request
    
    try {
      const paymentMethod = factory.createPaymentMethod(paymentMethodType);
    
      // Payment logic
      const amount = 100; // Assuming this comes from the request
      const paymentLink = paymentMethod.pay(amount);
    
      // Return the payment link to the client
      //res.status(200).json({ paymentLink });
    } catch (error:any) {
      console.error('Error during payment processing:', error.message);
      // Handle payment processing error
    }
}

// In the payment verification controller
function verify(){
    try {
        const factory = new PaymentFactory();
        const paymentMethodType = "creditcard"; // Assuming you know the payment method type
        const paymentMethod = factory.createPaymentMethod(paymentMethodType);
      
       // const paymentId = req.params.paymentId; // Assuming this comes from the request
        const paymentId =  "cc_jnfejsbgbg"; 
      
        // Verify payment
        const isVerified = paymentMethod.verifyPayment(paymentId);
      
        if (isVerified) {
          console.log('Payment verified.');
          // Proceed with order fulfillment or further processing
         // res.status(200).json({ message: 'Payment verified.' });
        } else {
          console.log('Payment verification failed.');
          // Handle payment verification failure
         // res.status(400).json({ message: 'Payment verification failed.' });
        }
      } catch (error:any) {
        console.error('Error during payment verification:', error.message);
        // Handle payment verification error
        //res.status(500).json({ message: 'Error during payment verification.' });
      }
    
 }

pay()
verify()