// import order reqpository
// business logic and calling order repository

const CrudService = require("./crud.service");

class OrderService extends CrudService {
  constructor(orderRepository) {
    super(orderRepository);
  }

  findByCustomer(customer_id) {
    const response = this.entityRepository
      .find()
      .filter((order) => order.customer_id === customer_id);
    return response;
  }
}

module.exports = OrderService;
