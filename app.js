require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./api/users/user.router");
const cors = require("cors");

app.use(express.json());
app.use(cors({ origin: "*" }));

app.use("/api/v1/employees", userRouter);
const port = 8081;
app.listen(port, () => {
  console.log("server up and running on PORT :", port);
});
