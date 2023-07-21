const BaseRepository = require("./base.repository");

class UserRepository extends BaseRepository {
  constructor() {
    super(data);
  }
}
// Assume this the  DB table data
data = [
  { id: "1", name: "abdo", age: 25, email: "abdo@gmail.com" },
  { id: "2", name: "ahmed", age: 19, email: "ahmed@gmail.com" },
  { id: "3", name: "hossam", age: 10, email: "hossam@gmail.com" },
  { id: "4", name: "khaled", age: 30, email: "khaled@gmail.com" },
];

module.exports = UserRepository;
