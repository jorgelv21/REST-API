const router = require("express").Router();
const personController = require("../controllers/personController");


//Atualizar Pessoa
router.route("/persons").post((req, res) => {
  personController.create(req, res);
});

//Buscar Pessoas
router.route('/persons').get((req,res)=>{
    personController.get(req, res)
})

//Buscar Pessoa por ID
router.route('/person/:id').get((req,res)=>{
  personController.index(req,res)
})

//Atualizar Pessoa por ID
router.route('/person/:id').put((req,res)=>{
  personController.update(req,res)
});

module.exports = router;
