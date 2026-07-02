// routes/jwtAuth.js
const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwtGenerator = require("../utils/jwtGenerator");
const validInfo = require("../middleware/validInfo");
const authorization = require("../middleware/authorization");

router.post("/register", validInfo, async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.findOne({ user_email: email });
    if (user) {
      return res.status(401).send("User already exists");
    }
    const salt = await bcrypt.genSalt(10);
    const bcryptPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      user_name: name,
      user_email: email,
      user_password: bcryptPassword,
    });
    await newUser.save();
    const token = jwtGenerator(newUser._id);
    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.post("/login", validInfo, async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ user_email: email });
    if (!user) {
      return res.status(401).json("Password or email is incorrect");
    }
    const validPassword = await bcrypt.compare(password, user.user_password);
    if (!validPassword) {
      return res.status(401).json("Invalid Credential");
    }
    const token = jwtGenerator(user._id);
    res.json({ jwtToken: token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.get("/is-verify", authorization, async (req, res) => {
  try {
    res.json(true);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
