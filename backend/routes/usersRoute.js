const {
  loginUserCtrl,
  registerUserCtrl,
  logoutUserCtrl,
} = require("../controllers/usersCtrl");
const passport = require("passport");
const express = require("express");
const { storeReturnTo } = require("../middleware/isLoggedIn");

const userRoutes = express.Router();

userRoutes.post("/register", registerUserCtrl);

userRoutes.post(
  "/login",
  storeReturnTo,
  passport.authenticate("local", {
    failureFlash: true,
    failureRedirect: "/login",
  }),
  (req, res) => {
    const redirectUrl = res.locals.returnTo || "/";
    res.redirect(redirectUrl);
  }
);

userRoutes.get("/logout", logoutUserCtrl);

module.exports = userRoutes;
