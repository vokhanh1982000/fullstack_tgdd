const express = require('express');
const app = express();
const mongoose = require('mongoose');
require("dotenv").config();
const authRoute = require("./routes/auth");
// const userRoute = require("./routes/users");
const itemRoute = require("./routes/items");
const cateRoute = require("./routes/cates");
const userRoute = require("./routes/users");

const connectDB = async () => {
    try {
      await mongoose.connect(
        `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.h3cuj.mongodb.net/theGioiDiDong?retryWrites=true&w=majority`,
        {
          useCreateIndex: true,
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useFindAndModify: false,
        }
      );
      console.log("MongoDB connected");
    } catch (error) {
      console.log(error.message);
      process.exit(1);
    }
  };
  
  connectDB();

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/items", itemRoute);
app.use("/api/cates", cateRoute);
app.use("/api/users", userRoute);

app.listen(8800, () => {
    console.log("Backend server is running!");
})