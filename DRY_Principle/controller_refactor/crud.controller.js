// crudController.js
const express = require("express");
const router = express.Router();

class CrudController {
  // user or order or customer or product
  constructor(Model, service) {
    this.Model = Model;
    this.service = service;
  }

  find = (req, res) => {
    try {
      const data = this.service.find();
      res.status(200).json({
        message: `${this.Model.originalName}s returned successfully`,
        data,
      });
    } catch (error) {
      res
        .status(500)
        .send({ message: error.message || "Something went wrong" });
    }
  };
  create = (req, res) => {
    try {
      const data = new this.Model();
      data.assign(req.body);

      this.service.create(data);
      res.status(200).json({
        message: `${this.Model.originalName} created successfully`,
        data,
      });
    } catch (error) {
      res
        .status(500)
        .send({ message: error.message || "Something went wrong" });
    }
  };

  read = (req, res) => {
    const itemId = req.params.id;
    try {
      const data = this.service.findOneById(itemId);
      if (!data) throw new Error(`${this.Model.originalName} not found`);
      res.status(200).json({
        message: `${this.Model.originalName} fetched successfully`,
        data,
      });
    } catch (error) {
      res
        .status(500)
        .send({ message: error.message || "Something went wrong" });
    }
  };

  update = (req, res) => {
    const itemId = req.params.id;
    try {
      const data = this.service.update(itemId, req.body);
      if (!data) throw new Error(`${this.Model.originalName} not found`);

      res.status(200).json({
        message: `${this.Model.originalName} updated successfully`,
        data,
      });
    } catch (error) {
      res
        .status(500)
        .send({ message: error.message || "Something went wrong" });
    }
  };

  delete = (req, res) => {
    const itemId = req.params.id;
    try {
      const data = this.service.delete(itemId);
      if (!data) throw new Error(`${this.Model.originalName} not found`);
      res.status(200).json({
        message: `${this.Model.originalName} deleted successfully`,
        data,
      });
    } catch (error) {
      res
        .status(500)
        .send({ message: error.message || "Something went wrong" });
    }
  };
}

module.exports = CrudController;
