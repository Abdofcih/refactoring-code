// task: 3  LSP task
//  task: 4  ISP task
class Payment {
    constructor(amount) {
      this.amount = amount;
    }
  // task: 3  LSP task
    calculateAmount() {
      throw new Error("calculateAmount method is not implemented");
    }
  }

  module.exports = Payment