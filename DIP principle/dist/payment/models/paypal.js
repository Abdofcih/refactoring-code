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
exports.PayPalProvider = void 0;
class PayPalProvider {
    constructor() {
    }
    initiatePayment(amount) {
        return __awaiter(this, void 0, void 0, function* () {
            // Implementation specific to PayPal
            // Initiate payment and return the payment ID
            return new Promise((resolve, reject) => {
                console.log(`paypal payment fulfilled with amount ${amount} `);
                resolve(`paypal-amount-${amount} `);
            });
        });
    }
    verifyPayment(paymentId) {
        return __awaiter(this, void 0, void 0, function* () {
            // Implementation specific to PayPal
            // Verify payment status using the payment ID
            return new Promise((resolve, reject) => {
                resolve(true);
            });
        });
    }
}
exports.PayPalProvider = PayPalProvider;
//# sourceMappingURL=paypal.js.map