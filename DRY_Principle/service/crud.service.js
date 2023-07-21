class CrudService {
  constructor(entityRepository) {
    this.entityRepository = entityRepository;
  }
  find() {
    return this.entityRepository.find();
  }
  findOneById(id) {
    const item = this.entityRepository.findOneById(id);
    if (!item) throw new Error("Item not found");
    return item;
  }
  create(item) {
    const response = this.entityRepository.create(item);
    return response;
  }
  update(id, itemToUpdate) {
    const item = this.entityRepository.update(id, itemToUpdate);

    if (!item) {
      throw new Error("Item not found");
    }
    return item;
  }
  delete(id) {
    const item = this.entityRepository.delete(id);
    if (!item) {
      throw new Error("Item not found");
    }
    return item;
  }
}

module.exports = CrudService;
