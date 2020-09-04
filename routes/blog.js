const router = require("express").Router();
const Blog = require("../models/Blog");

router
  .get("/blog/:id", async (req, res) => {
    const { id } = req.params;
    const getBlog = await Blog.findOne({ _id: id });

    res.render("particularBlog", { blog: getBlog });
  })

  .get("/delete/:id", (req, res) => {
    const { id } = req.params;
    Blog.deleteOne({ _id: id })
      .then(() => {
        console.log("Deleted blog successfully!");
        res.redirect("/");
      })
      .catch((err) => console.log(err));
  })

  .get("/edit/:id", async (req, res) => {
    const { id } = req.params;

    const getData = await Blog.findOne({ _id: id });
    res.render("editBlog", { blog: getData });
  })

  .post("/edit/:id", (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;

    Blog.updateOne({ _id: id }, { title, content })
      .then(() => {
        console.log("successfully! updated the blog!");
        res.redirect("/");
      })
      .catch((err) => console.log(err));
  });

module.exports = router;
