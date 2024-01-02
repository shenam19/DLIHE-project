// @desc Create Post

const asyncHandler = require("express-async-handler");

// @route POST /post
const Post = require("../models/post");

const CreatePostCtrl = asyncHandler(async (req, res) => {
  const { path, filename } = req.file;
  const { title, description, image, category } = req.body;
  // console.log(title, description, image, category);
  const productExist = await Post.findOne({ title });
  if (productExist) {
    throw new Error("Product already exist");
  }

  //Create the product
  // const post = await Post.create({
  //   title,
  //   description,
  //   category,

  //   image,
  // });
  //Push the product into category
  //Send response
  // res.redirect("");

  const post = new Post({
    title,
    description,
    category,
  });
  post.image = { url: path, filename: filename };
  await post.save();
  console.log(post);
  res.redirect("/");
});

const getAllPosts = async (req, res) => {
  const data = await Post.find({ category: "News" })
    .sort({ "date.created": -1 })
    .limit(3);

  res.json({
    status: "success",
    message: "All posts available",
    data: Array.isArray(data) ? data : [],
  });
};
const getAllNews = async (req, res) => {
  const data = await Post.find({ category: "News" }).sort({
    "date.created": -1,
  });

  res.json({
    status: "success",
    message: "All News available",
    data: Array.isArray(data) ? data : [],
  });
};

const getAllAnnouncement = async (req, res) => {
  const data = await Post.find({ category: "Announcement" }).sort({
    "date.created": -1,
  });

  res.json({
    status: "success",
    message: "All News available",
    data: Array.isArray(data) ? data : [],
  });
};

const getNewsDetails = async (req, res) => {
  try {
    const news = await Post.findById(req.params.id);
    if (!news) {
      return res.status(404).json({ error: "News not found" });
    }
    res.json({ data: news });
  } catch (error) {
    console.error("Error fetching news detail:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getEventDetails = async (req, res) => {
  try {
    const event = await Post.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ error: "event not found" });
    }
    res.json({ data: event });
  } catch (error) {
    console.error("Error fetching event detail:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getEvent = async (req, res) => {
  const data = await Post.find({ category: "Event" })
    .sort({ "date.created": -1 })
    .limit(2);

  res.json({
    status: "success",
    message: "All posts available",
    data: Array.isArray(data) ? data : [],
  });
};

//Single post
const getSinglePost = async (req, res) => {
  const { id } = req.params;
  const post = await Post.findById(id);
  res.json({
    status: "Success",
    message: "Able to get post",
    post,
  });
};

module.exports = {
  CreatePostCtrl,
  getSinglePost,
  getAllPosts,
  getEvent,
  getAllNews,
  getNewsDetails,
  getEventDetails,
  getAllAnnouncement,
};
