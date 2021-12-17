const router = require("express").Router();
const { Blog } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const newBlog = await Blog.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBlog);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", withAuth, async (req, res) => {
  try {
    const [done] = await Blog.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (done > 0) {
      res.status(200).end();
    } else {
      res.status(400).end();
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const [done] = await Blog.delete({
      where: {
        id: req.params.id,
      },
    });

    if (done > 0) {
      res.status(200).end();
    } else {
      res.status(400).end();
    }
  } catch (err) {
    res.status(400).json(err);
  }
});
module.exports = router;
