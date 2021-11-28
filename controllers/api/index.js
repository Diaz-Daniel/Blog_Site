const router = require("express").Router();
const usersRouter = require("./userRoutes");

router.use("/user", usersRouter);

module.exports = router;
