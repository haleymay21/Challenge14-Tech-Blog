const router = require("express").Router();
const { Post, Comment, User } = require("../models/");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({});
    console.log(postData);
    const posts = postData.map((post) => post.get({ plain: true }));
    console.log(posts);
    res.render("home1", { posts, layout: "home" });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
  }
  res.render("login", { layout: "home" });
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
  }
  res.render("signup", { layout: "home" });
});

module.exports = router;

// also need login and signup routes here //
