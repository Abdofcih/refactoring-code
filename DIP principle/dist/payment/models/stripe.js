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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripeProvider = void 0;
const stripe_1 = __importDefault(require("stripe"));
class StripeProvider {
    constructor() {
        this.initiatePayment = (amount) => __awaiter(this, void 0, void 0, function* () {
            const paymentIntent = yield this.stripe.paymentIntents.create({
                amount,
                currency: 'usd',
                // Add other necessary payment details
            });
            const paymentId = paymentIntent.id;
            const checkoutURL = yield this.createPaymentSession(paymentId);
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                console.log(`${paymentId} ------ stripe payment fulfilled with amount ${amount} `);
                resolve({ paymentId, checkoutURL });
            }));
        });
        this.verifyPayment = (paymentId) => __awaiter(this, void 0, void 0, function* () {
            const paymentIntent = yield this.stripe.paymentIntents.retrieve(paymentId);
            const isPaymentVerified = paymentIntent.status === 'succeeded';
            console.log(`isPaymentVerified : ${isPaymentVerified}`);
            console.log(paymentIntent);
            return new Promise((resolve, reject) => {
                resolve(isPaymentVerified);
            });
        });
        this.createPaymentSession = (paymentId) => __awaiter(this, void 0, void 0, function* () {
            console.log(`paymentIddddddddddddd `, paymentId);
            const session = yield this.stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items: [
                    {
                        price_data: {
                            currency: 'usd',
                            product_data: {
                                name: 'T-shirt',
                            },
                            unit_amount: 1000,
                        },
                        quantity: 9,
                    },
                ],
                mode: 'payment',
                success_url: 'https://fast.com/',
                cancel_url: 'https://your-website.com/cancel',
                metadata: {
                    paymentId: paymentId,
                },
            });
            console.log(`createPaymentSession `, session);
            const checkoutURL = session.url;
            return { checkoutURL, paymentId };
        });
        let key = process.env.STRIP_API_KEY;
        this.stripe = new stripe_1.default(key, { apiVersion: '2022-11-15' });
    }
}
exports.StripeProvider = StripeProvider;
//# sourceMappingURL=stripe.js.map