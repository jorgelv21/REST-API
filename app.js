//configurações do DotEnv
require("dotenv").config();

//Variaveis do express
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000
const cors = require('cors')


app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())
app.use(cors())

//Conectando ao Banco de Dados
const conn = require('./db/conn')
conn()

const routes = require('./routes/router');
app.use('/api', routes)


//Inicializando o Servidor
  app.listen(PORT, () => {
    try {
      console.log(`Servidor Conectado na Porta ${PORT}`);
    } catch (error) {
      console.error(error);
    }
  });


