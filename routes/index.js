const router = require("express").Router();
const Blog = require("../models/Blog");

router.get("/", async (req, res) => {
  const allBlogs = await Blog.find();
  res.render("index", { blogs: allBlogs });
});

module.exports = router;
