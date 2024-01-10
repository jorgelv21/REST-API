const router = require('express').Router()

const personsRouter = require ('./persons')


/*Unificando Rotas utilizando este arquivo
caso crie uma outra rota deverá ser atualizado neste arquivo
*/
router.use('/', personsRouter)

module.exports = router