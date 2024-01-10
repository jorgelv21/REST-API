const mongoose = require("mongoose");


const { Schema } = mongoose;


// Esquema de cadastro de pessoa para o mongoDB
const personSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    approved: {
      type: Boolean,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Person = mongoose.model("Person", personSchema)

module.exports = {
    Person,
    personSchema
}
