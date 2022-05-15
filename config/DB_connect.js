const mongoose = require("mongoose");

const DBconnect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/mongoosecheck");
    console.log("database is connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = DBconnect;
