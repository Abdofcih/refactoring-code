class Order {
  static originalName= "Order"
  constructor(customer_id, total_price, delivery_id) {
 
    this.customer_id = customer_id;
    this.total_price = total_price;
    this.delivery_id = delivery_id;
  }
  assign(data){
    Object.assign(this,data)
  }
}

module.exports = Order;
