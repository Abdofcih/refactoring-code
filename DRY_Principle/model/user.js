class User {
  static originalName= "User"
  constructor(name, email, age) {
    this.name = name;
    this.email = email;
    this.age = age;
  }
  assign(data){
    Object.assign(this,data)
  }
}

module.exports = User;
