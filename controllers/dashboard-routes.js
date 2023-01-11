const router = require("express").Router();
const { Post, Comment, User } = require("../models/");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      //   where: { user_id: req.session.user_id },
    });

    const posts = postData.map((post) => post.get({ plain: true }));
    res.render("post", { posts, layout: "dashboard", style: "dashboard.css" });
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
