const router = require("express").Router();
const withAuth = require("../utils/auth");
const { User, Blog } = require("../models");

router.get("/", withAuth, async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const blogData = await Blog.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });

    // Serialize data so the template can read it
    const blogs = blogData.map((blog) => blog.get({ plain: true }));

    res.render("dashboard", { blogs, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/new", withAuth, (req, res) => {
  res.render("new", { logged_in: req.session.logged_in });
});

router.get("/edit/:id", withAuth, (req, res) => {
  res.render("edit", { logged_in: req.session.logged_in });
});

module.exports = router;
