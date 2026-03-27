const express = require("express");

const adminRouter = require("./routes/admin");

const app = express();
const PORT = 4000;

app.use("/admin", adminRouter);

app.listen(PORT, "localhost", () => {
  console.log(`Server Started At Port ${PORT}`);
});
