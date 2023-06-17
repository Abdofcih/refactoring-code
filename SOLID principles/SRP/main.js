require('dotenv').config()
const express = require("express");
const app = express();

app.use(express.json());

app.get("", (req, res) => {
  res.send("app works fine");
});
require("./app.router")(app);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
