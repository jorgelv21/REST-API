const mongoose = require("mongoose");
require ('dotenv').config()


//conexão com o Banco de dados MongoDB
async function main() {
    const url = process.env.URL
  try {
    await mongoose.connect(
      url
    );
    console.log("Conectado ao Banco de Dados");
  } catch (error) {
    console.log(`erro: ${error}`);
  }
}

module.exports = main;
