const { Router } = require("express");
const { calculateAmount,receiveCash,capturePayment } = require("./payment.controller");
const router = Router();

router.post("/calculate-amount", calculateAmount);
router.post("/receive-cash", receiveCash);
router.post("/capture-payment", capturePayment);

module.exports = router;
