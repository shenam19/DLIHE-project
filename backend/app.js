const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const dbConnect = require("./config/dbConnect");
const engine = require("ejs-mate");
const path = require("path");
const { globalErrHandler, notFound } = require("./middleware/globalErrHandler");
const userRoutes = require("./routes/usersRoute");
const postRoutes = require("./routes/postsRoute");
const passport = require("passport");
const localStrategy = require("passport-local");
const session = require("express-session");
const flash = require("connect-flash");
const User = require("./models/user");
const { isLoggedIn } = require("./middleware/isLoggedIn");
// const cors = require("cors");
// Database connection
dbConnect();

const app = express();
// var corsOptions = {
//   origin: "http://localhost:5000",
//   method: "GET,POST,PUT,DELETE,PATCH,HEAD",
//   credentials: true,
// };
// app.use(cors(corsOptions));
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//     credentials: true,
//   })
// );

app.engine("ejs", engine);
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "/public")));
app.set("views", path.join(__dirname, "views"));

app.use(
  session({
    secret: "geeksforgeeks",
    saveUninitialized: true,
    resave: true,
    cookie: {
      httpOnly: true,
      expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
  })
);

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  res.locals.success = req.flash("success");

  res.locals.error = req.flash("error");
  next();
});

app.get("/", (req, res) => {
  res.render("Home");
});

app.get("/login", (req, res) => {
  res.render("Login");
});
app.get("/register", (req, res) => {
  res.render("Register");
});

app.get("/post/new", isLoggedIn, (req, res) => {
  res.render("New");
});

// Routes
app.use("/", userRoutes);
app.use("/", postRoutes);
// middleware
app.use(notFound);
app.use(globalErrHandler);
module.exports = app;
