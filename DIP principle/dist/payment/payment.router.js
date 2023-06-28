"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const payment_controller_1 = require("./payment.controller");
const PaymentRouter = (0, express_1.Router)();
const paymentController = new payment_controller_1.PaymentController();
PaymentRouter.post('/', paymentController.initiatePayment);
PaymentRouter.get('/:provider/:paymentId/verify', paymentController.verifyPayment);
exports.default = PaymentRouter;
//# sourceMappingURL=payment.router.js.map