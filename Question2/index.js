const express = require("express");
const User = require("./models/userModel");

const app = express();
const PORT = 6001;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

//Signup
app.post("/api/signup", async (req, res) => {
  const { email, username, password } = req.body;
  if (!email || !username || !password) {
    return res.status(400).json({ message: "Please fill all the fields" });
  }

  try {
    const newUser = await User({
      email: email,
      username: username,
      password: password,
    });
    await newUser.save();
    res.status(201).json({ message: "User Created Successfully" });
  } catch (error) {
    res.status(500).json({ message: "An Error Occured During Signup" });
  }
});

// Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
