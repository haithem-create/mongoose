const express = require("express");
const app = express();
const DBconnect = require("./config/DB_connect");
const PORT = 5000;
DBconnect();

app.use(express.json());
app.use("/person", require("./routes/person"));

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log("serveur is runnning");
});
