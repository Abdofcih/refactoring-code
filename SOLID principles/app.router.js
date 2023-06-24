const UsersRouter = require("./users/users.router");
const ReportsRouter = require("./reports/report.router");
const PaymentRouter = require("./payment/payment.router");
const appRouter = (app) => {
  app.use("/users", UsersRouter);
  app.use("/reports", ReportsRouter);
  app.use("/payment", PaymentRouter);
  // other routers
  // app.use("posts",PostsRouter)
};

module.exports = appRouter;
