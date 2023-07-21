// orderController.js
const express = require("express");
const router = express.Router();
const Order = require("../model/order");
const OrderRepository = require("../repository/order.repository");
const OrderService = require("../service/order.service");
const CrudController = require("./crud.controller");

const orderRepository = new OrderRepository();
const orderService = new OrderService(orderRepository);
const orderController = new CrudController(Order, orderService);
router.get("/orders", orderController.find);
router.post("/orders", orderController.create);
router.get("/orders/:id", orderController.read);
router.put("/orders/:id", orderController.update);
router.delete("/orders/:id", orderController.delete);

// get customerOrders

router.get("/orders/customer/:customerId", (req, res) => {
  const customerId = req.params.customerId;
  try {
    const data = orderService.findByCustomer(customerId);
    res.status(200).json({
      message: `orders by customers`,
      data,
    });
  } catch (error) {
    res.status(500).send({ message: error.message || "Something went wrong" });
  }
});

module.exports = router;
