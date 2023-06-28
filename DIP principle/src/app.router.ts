import PaymentRouter from "./payment/payment.router"


const useRouters = (app)=>{
    app.use("/payment",PaymentRouter)
}


export default useRouters;