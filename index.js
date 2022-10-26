const express = require("express");
const app = express();

const mongoose = require("mongoose");

const dotenv = require("dotenv");

const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");

dotenv.config();

mongoose
  .connect(process.env.MONGO_ROLL)
  .then(() => console.log("DB connection is succesful"))
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use("/api/auth", authRoute);

app.use("/api/users", userRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Sever Running on ${port}`);
});
