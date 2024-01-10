const { Person: personModel } = require("../models/Person");

const personController = {
  create: async (req, res) => {
    try {
      const person = {
        name: req.body.name,
        age: req.body.age,
        approved: req.body.approved,
      };

      const response = await personModel.create(person);

      res.status(201).json({ response, msg: "Pessoa cadastrada com sucesso!" });
    } catch (error) {
      console.log(error);
    }
  },
  get: async (req, res) => {
    try {
      const response = await personModel.find({});
      res.status(200).json({ response });
    } catch (error) {
      console.log(error);
    }
  },
  index: async (req, res) => {
    const id = req.params.id;

    try {
      const response = await personModel.findOne({ _id: id });
      res.status(200).json({ response });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    const id = req.params.id;

    const person = {
      name: req.body.name,
      age: req.body.age,
      approved: req.body.approved,
    };
    try {
      await personModel.findByIdAndUpdate(id, person);
      res.status(201).json({msg: "Pessoa Atualizada com Sucesso" , person});
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = personController;
