const express = require("express");
const router = express.Router();
const { signup, signin } = require("../handlers/auth");

router.post("/signup", signup) //when user reach this route, will call signup function
router.post("/signin", signin)

module.exports = router;