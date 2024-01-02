// const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");
// const { Schema } = mongoose;

// const userSchema = new Schema(
//   {
//     fullName: {
//       type: String,
//       required: true,
//     },
//     email: {
//       type: String,
//       required: true,
//     },
//     password: {
//       type: String,
//       required: true,
//     },
//     posts: [
//       {
//         type: Schema.Types.ObjectId,
//         ref: "Post",
//       },
//     ],
//     isAdmin: {
//       type: Boolean,
//       default: false,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// //secure the password with bcrypt
// userSchema.pre("save", async function (next) {
//   const user = this;
//   if (!user.isModified("password")) {
//     next();
//   }
//   try {
//     const hashPassword = await bcrypt.hashSync(user.password, 12);
//     user.password = hashPassword;
//   } catch (error) {
//     next(error);
//   }
// });

// //json web token
// userSchema.methods.generateToken = async function () {
//   try {
//     return jwt.sign(
//       {
//         userId: this._id.toString(),
//         email: this.email,
//         isAdmin: this.isAdmin,
//       },
//       process.env.JWT_SECRET_KEY,
//       {
//         expiresIn: "30d",
//       }
//     );
//   } catch (error) {
//     console.error(error);
//   }
// };

// //Compare the password

// userSchema.methods.comparePassword = async function (password) {
//   try {
//     const user = await bcrypt.compare(password, this.password);
//     return user;
//   } catch (error) {
//     console.error(error);
//   }
// };
// const User = mongoose.model("User", userSchema);
// module.exports = User;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
});
userSchema.plugin(passportLocalMongoose);
const User = mongoose.model("User", userSchema);
module.exports = User;
