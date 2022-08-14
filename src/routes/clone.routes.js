const express = require("express");
const router = express.Router();

const { configClone } = require("../api/clone.api");

//@route POST api/clone/
//@description Config Clone
router.post("/", configClone);

module.exports = router;
