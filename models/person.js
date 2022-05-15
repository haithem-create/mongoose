const mongoose = require("mongoose");
const schema = mongoose.Schema;

const personSchema = new schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  favFood: { type: Array, required: true },
});

const Person = mongoose.model("person", personSchema);

module.exports = Person;
