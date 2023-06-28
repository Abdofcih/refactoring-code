"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const payment_router_1 = __importDefault(require("./payment/payment.router"));
const useRouters = (app) => {
    app.use("/payment", payment_router_1.default);
};
exports.default = useRouters;
//# sourceMappingURL=app.router.js.map