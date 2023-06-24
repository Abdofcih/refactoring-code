const UsersRouter = require("./users/users.router");
const ReportsRouter = require("./reports/report.router");
const appRouter = (app) => {
  app.use("/users", UsersRouter);
  app.use("/reports", ReportsRouter);
  // other routers
  // app.use("posts",PostsRouter)
};

module.exports = appRouter;
