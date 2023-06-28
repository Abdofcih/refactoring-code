"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentController = void 0;
const payment_service_1 = require("./payment.service");
const stripe_1 = require("./models/stripe");
const paypal_1 = require("./models/paypal");
const paymod_1 = require("./models/paymod");
class PaymentController {
    constructor() {
        this.initiatePayment = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const amount = req.body ? req.body['amount'] : 0;
            const provider = req.body ? req.body['provider'] : 'stripe';
            console.log("req.body", req.body);
            console.log("amount, provider", provider);
            try {
                if (!this.paymentProviders.hasOwnProperty(provider)) {
                    res.status(400).json({ error: 'Invalid payment provider.' });
                    return;
                }
                const distProvider = this.paymentProviders[provider];
                const paymentService = new payment_service_1.PaymentService(distProvider);
                const checkoutData = yield paymentService.initiatePayment(amount);
                res.json(checkoutData);
            }
            catch (error) {
                res.status(500).json({ error: error.message || 'Failed to initiate payment.' });
            }
        });
        this.verifyPayment = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const paymentId = req.params['paymentId'] || 'defualt-id';
            const provider = req.params['provider'] || 'stripe';
            try {
                const paymentService = new payment_service_1.PaymentService(this.paymentProviders[provider]);
                const isPaymentVerified = yield paymentService.verifyPayment(paymentId);
                res.json({ verified: isPaymentVerified });
            }
            catch (error) {
                res.status(500).json({ error: 'Failed to verify payment.' });
            }
        });
        // Create instances of the payment providers
        this.paypalProvider = new paypal_1.PayPalProvider();
        this.stripeProvider = new stripe_1.StripeProvider();
        this.paymobProvider = new paymod_1.PayMobProvider();
        // Define the available payment providers
        this.paymentProviders = {
            paypal: this.paypalProvider,
            stripe: this.stripeProvider,
            paymob: this.paymobProvider,
        };
        console.log("const : this.paymentProviders", this.paymentProviders);
    }
}
exports.PaymentController = PaymentController;
//# sourceMappingURL=payment.controller.js.map