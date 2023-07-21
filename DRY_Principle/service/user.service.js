// import order reqpository
// business logic and calling order repository
const CrudService = require("./crud.service");

class UserService extends CrudService {
  constructor(userRepository) {
    super(userRepository);
  }
}

module.exports = UserService;
