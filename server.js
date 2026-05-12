const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();


// VERY IMPORTANT CORS FIX
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());


// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));


// User Schema
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String,
});

const User = mongoose.model("User", UserSchema);


// Signup Route
app.post("/api/auth/signup", async (req, res) => {

  try {

    const user = await User.create(req.body);

    res.json({
      message: "User created successfully",
      user,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });

  }

});


// Test Route
app.get("/", (req, res) => {
  res.send("API Running");
});


app.listen(5000, () => {
  console.log("Server running on 5000");
});