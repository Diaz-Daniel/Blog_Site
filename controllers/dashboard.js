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

//need to build out route
router.get("/new", withAuth, (req, res) => {
  res.render("new", { logged_in: req.session.logged_in });
});

//need to build out route
router.get("/edit/:id", withAuth, async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const blogData = await Blog.findByPk(req.params.id);

    // Serialize data so the template can read it
    const oneblog = blogData.get({ plain: true });

    res.render("edit", { oneblog, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
