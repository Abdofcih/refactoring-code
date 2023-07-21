// dealing with DB , adding queries

const { genRandomNumber } = require("../utils/generateRandom");

class BaseRepository {
  constructor(data) {
    this.data = data;
  }

  find() {
    return this.data;
  }
  findOne(query) {
    const { where } = query;
    const result = this.data.find((obj) => {
      for (let key in where) {
        if (obj[key] !== where[key]) {
          return false;
        }
      }
      return true;
    });
    return result;
  }
  findOneById(id) {
    const item = this.findOne({ where: { id } });
    return item;
  }
  create(item) {
    item["id"] = `${genRandomNumber(4)}`;
    this.data.push(item);
  }
  update(id, item) {
    const index = this.data.findIndex((obj) => obj.id === id);

    if (index === -1) {
      return undefined;
    }
    const updatedItem = { id, ...item };
    this.data[index] = updatedItem;
    return updatedItem;
  }

  delete(id) {
    const index = this.data.findIndex((obj) => obj.id === id);
    if (index === -1) return undefined;
    const deletedItem = this.data[index];
    this.data.splice(index, 1);
    return deletedItem;
  }
}

module.exports = BaseRepository;
