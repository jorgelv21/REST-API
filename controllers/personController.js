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
      res.status(400).json({error: "Ocorreu um erro"})
    }
  },
  get: async (req, res) => {
    try {
      const response = await personModel.find({});
      res.status(200).json({ response });
    } catch (error) {
      res.status(404).json({error: "Ocorreu um erro"})
    }
  },
  index: async (req, res) => {
    const id = req.params.id;

    try {
      const response = await personModel.findOne({ _id: id });
      res.status(200).json({ response });
    } catch (error) {
      res.status(404).json({error: "Ocorreu um erro"})
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
      res.status(201).json({ msg: "Pessoa Atualizada com Sucesso", person });
    } catch (error) {
      res.status(400).json({error: "Ocorreu um erro"})
    }
  },
  delete: async (req, res) => {
    const id = req.params.id;
    try {
      await personModel.deleteOne({_id : id})
      res.status(201).json({msg: "Pessoa deletada com sucesso"})
    } catch (error) {
      res.status(400).json({error: "Ocorreu um erro"})
    }
  },
};

module.exports = personController;
