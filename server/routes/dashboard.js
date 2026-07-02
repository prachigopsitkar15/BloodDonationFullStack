// routes/dashboard.js
const router = require("express").Router();
const User = require("../models/User");
const authorization = require("../middleware/authorization");

router.get("/", authorization, async (req, res) => {
  try {
    const user = await User.findById(req.user);
    res.json(user.user_name);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server Error");
  }
});

module.exports = router;
