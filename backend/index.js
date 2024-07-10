const express = require("express");
const app = express();
const port = 5000;
const mongoDB = require("./db");
mongoDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use()
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

