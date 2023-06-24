const Payment = require("./payment.service");

class CashPayment extends Payment {
    constructor(amount) {
      super(amount);
    }
    calculateAmount() {
      const tax = 12;
      return this.amount + tax;
    }
    //  task: 4  ISP task
    receiveCash(deliveryId){
        const amount = this.calculateAmount()
      // Implementation logic that user with id  {deliveryId} received cash 
      const successMessage = `User with id ${deliveryId} received cash amount ${amount} `
      console.log(successMessage);
      return successMessage
    }
  }

  module.exports =  CashPayment
