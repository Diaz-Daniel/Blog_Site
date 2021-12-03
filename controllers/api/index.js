const router = require("express").Router();
const usersRouter = require("./userRoutes");
const blogRouter = require("./blog");

router.use("/user", usersRouter);
router.use("/blog", blogRouter);

module.exports = router;
