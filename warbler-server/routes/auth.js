const express = require("express");
const router = express.Router();
const { signup } = require("../handlers/auth");

router.post("/signup", signup) //when user reach this route, will call signup function

module.exports = router;