// import mongoose from "mongoose";
const mongoose = require("mongoose");
const dbConnect = async () => {
  const URI = process.env.MONGO_URI;
  try {
    const connected = await mongoose.connect(URI);
    console.log(`MongoDB connected: ${connected.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};
// export default dbConnect;
module.exports = dbConnect;
