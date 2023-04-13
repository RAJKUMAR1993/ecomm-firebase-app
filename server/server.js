const express = require("express");
const app = express();
const cors = require("cors");
require("dontenv").config();
const port = process.env.PORT;
app.get(() => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log("Server listening on port" + port);
});
