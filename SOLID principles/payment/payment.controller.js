const { CashPayment, CreditPayment } = require("./services");

const calculateAmount = (req, res) => {
  const { type, amount } = req.body;

  let payment;
  // task: 3  LSP task
  if (type === "cash") {
    payment = new CashPayment(amount);
  } else if (type === "credit") {
    payment = new CreditPayment(amount);
  } else {
    return res.status(400).json({ error: "Invalid payment type" });
  }

  const total = payment.calculateAmount();
  return res.json({ total });
};

const receiveCash = (req, res) => {
  let { amount } = req.body;
  amount = amount - 12; // removing tax to init our class
  let deliveryId = 1; // req.user.id
  const cash = new CashPayment(amount);
  try {
    const message = cash.receiveCash(deliveryId);
    res.send({ message });
  } catch {
    res
      .status(400)
      .send({ message: "something went wrong while saving transaction" });
  }
};
const capturePayment = (req, res) => {
  const { amount, creditNumber } = req.body;
  try {
    const credit = new CreditPayment(amount);
    const message = credit.capturePayment(amount, creditNumber);
    res.send({ message });
  } catch (error) {
    let message =
      error.message || "something went wrong while saving transaction";
    res.status(400).send({ message });
  }
};
module.exports = {
  calculateAmount,
  receiveCash,
  capturePayment,
};
