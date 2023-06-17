const UsersRouter = require("./users/users.router");
const appRouter = (app) => {
  app.use("/users", UsersRouter);
  // other routers
  // app.use("posts",PostsRouter)
};

module.exports = appRouter;
