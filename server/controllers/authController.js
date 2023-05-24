const User = require("../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function handleLogin(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "username and password are required" });
  }

  const existingUser = await User.findOne({ email: email }).exec();
  if (!existingUser) {
    return res.status(404).json({ message: "User not found" });
  }

  /* 
    Evaluate password 
  */
  const match = await bcrypt.compare(password, existingUser.password);
  if (match) {
    /*
      Create jsonwebtoken (jwt)
    */
    const token = jwt.sign(
      { email: existingUser._id },
      process.env.SECRET_TOKEN
    );

    const userInfo = {
      _id: existingUser._id,
      username: existingUser.username,
      email: existingUser.email,
      token: token,
    };

    res.cookie("user_info", userInfo, {
      httpOnly: false,
      secure: true,
      sameSite: "None",
      maxAge: 720 * 60 * 60 * 1000,
    });

    res.json({ userInfo });
  } else {
    res.status(401).json({ message: "unauthorized user" });
  }
}

module.exports = { handleLogin };
