const express = require("express");

const app = express();
const PORT = 4000;


app.listen(PORT, "localhost", () => {
  console.log(`Server Started At Port ${PORT}`);
});
