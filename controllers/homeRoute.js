const router = require("express").Router();
const { User } = require("../models");

router.get("/", (req, res) => {
  //check database for any posts
  //if posts, display on page
  res.render("blogPost");
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
