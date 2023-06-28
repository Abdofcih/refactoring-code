import { Router } from 'express';
import { PaymentController } from './payment.controller';

const PaymentRouter = Router();
const paymentController = new PaymentController();

PaymentRouter.post('/', paymentController.initiatePayment);
PaymentRouter.get('/:provider/:paymentId/verify', paymentController.verifyPayment);

export default PaymentRouter;