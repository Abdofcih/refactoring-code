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
exports.PaymentService = void 0;
class PaymentService {
    constructor(paymentProvider) {
        this.paymentProvider = paymentProvider;
    }
    initiatePayment(amount) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("init payment with amount", amount);
            return this.paymentProvider.initiatePayment(amount);
        });
    }
    verifyPayment(paymentId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.paymentProvider.verifyPayment(paymentId);
        });
    }
}
exports.PaymentService = PaymentService;
//# sourceMappingURL=payment.service.js.map