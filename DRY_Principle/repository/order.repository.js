// dealing with DB , adding queries

const BaseRepository = require("./base.repository");

class OrderRepository extends BaseRepository {
  constructor() {
    super(data);
  }
}

// Assume this the  DB table data
data = [
  { id: "1001", total_price: "50", customer_id: "1", delivery_id: "90001" },
  { id: "1002", total_price: "10", customer_id: "3", delivery_id: "90002" },
  {
    id: "1003",
    total_price: "100",
    customer_id: "1",
    delivery_id: "90003",
  },
  {
    id: "1004",
    total_price: "200",
    customer_id: "3",
    delivery_id: "90004",
  },
  {
    id: "1005",
    total_price: "1000",
    customer_id: "2",
    delivery_id: "90005",
  },
];
module.exports = OrderRepository;
