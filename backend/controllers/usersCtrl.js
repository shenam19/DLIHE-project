const asyncHandler = require("express-async-handler");

const User = require("../models/user");

//@desc Register User
//@route POST /api/v1/users/register
//@access Private/admin

const registerUserCtrl = asyncHandler(async (req, res) => {
  try {
    const { username, email, password } = req.body;
    console.log(username, email, password);
    const userExist = await User.findOne({ email });
    if (userExist) {
      req.flash("error", "User already Exist");
      res.redirect("/register");
    }

    // password
    const newUser = new User({ email, username });
    const registeredUser = await User.register(newUser, password);
    console.log(registeredUser);
    req.login(registeredUser, (err) => {
      if (err) return next(err);
      req.flash("success", "User registered");
      res.redirect("/login");
    });
  } catch (error) {
    req.flash("error", error.message);
    res.redirect("/register");
  }
});

//@desc Login User
//@route POST /api/v1/users/login
//@access public

const loginUserCtrl = asyncHandler(async (req, res) => {
  req.flash("success", "Login Successful");
  res.redirect("/");
});

const logoutUserCtrl = (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    req.flash("success", "Logout Successful");
    res.redirect("/");
  });
};
module.exports = { registerUserCtrl, loginUserCtrl, logoutUserCtrl };
