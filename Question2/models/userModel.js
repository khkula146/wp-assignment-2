const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/question2DB")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Failed to connect to MongoDB", err);
  });

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Unique Indexing for Email
userSchema.index({ email: 1 }, { unique: true });

const User = mongoose.model("User", userSchema);
module.exports = User;
