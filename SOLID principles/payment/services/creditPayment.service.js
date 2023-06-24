const Payment = require("./payment.service");

class CreditPayment extends Payment {
  constructor(amount) {
    super(amount);
  }
  calculateAmount() {
    return this.amount;
  }
  //  task: 4  ISP task
  authorizePayment(cardNumber) {
    const isAuthorized = this.#validateCardNumber(cardNumber);

    if (isAuthorized) {
      console.log("Payment authorized successfully.");
    } else {
      console.log(
        "Payment authorization failed. Please check your card details."
      );
      throw new Error("Payment not authorized");
    }
  }
  //  task: 4  ISP task
  capturePayment(amount, cardNumber) {
    this.authorizePayment(cardNumber);
    // Implementation logic for capturing the authorized payment
    return `Captured payment of $${amount} from card ${cardNumber}`;
  }

  // private method
  #validateCardNumber(cardNumber) {
    const cardRegex = /^[0-9]{16}$/; // Regex to validate a 16-digit card number
    return cardRegex.test(cardNumber);
  }
}
module.exports = CreditPayment;
