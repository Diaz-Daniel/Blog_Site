const router = require("express").Router();
const dashboardRoutes = require("./dashboard");

const apiRoutes = require("./api");
const homeRoutes = require("./homeRoute");

router.use("/", homeRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/api", apiRoutes);

module.exports = router;
