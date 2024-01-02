const {
  CreatePostCtrl,
  getSinglePost,
  getAllPosts,
  getEvent,
  getAllNews,
  getNewsDetails,
  getEventDetails,
  getAllAnnouncement,
} = require("../controllers/postsCtrl");
const { isLoggedIn } = require("../middleware/isLoggedIn");

const express = require("express");
const { storage, cloudinary } = require("../cloudinary");
const multer = require("multer");
const upload = multer({ storage });
const postRoutes = express.Router();

postRoutes.post("/post", isLoggedIn, upload.single("image"), CreatePostCtrl);
postRoutes.get("/api/post", getAllPosts);
postRoutes.get("/api/news", getAllNews);
postRoutes.get("/api/announcements", getAllAnnouncement);

postRoutes.get("/api/post/event", getEvent);
postRoutes.get("/api/post/:id", getSinglePost);

// API endpoint to get a specific news item by ID
postRoutes.get("/api/news/:id", getNewsDetails);
postRoutes.get("/api/event/:id", getEventDetails);

module.exports = postRoutes;
