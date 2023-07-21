const express = require("express");
var morgan = require("morgan");

const orderRouter = require("./controller_refactor/order.controller");
const userRouter = require("./controller_refactor/user.controller");

const app = express();
const port = 3000;

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);
app.use(express.json());
// Define a route handler for the root URL
app.get("/", (req, res) => {
  res.send("Hello, World!");
});
app.use("/api", orderRouter);
app.use("/api", userRouter);
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
