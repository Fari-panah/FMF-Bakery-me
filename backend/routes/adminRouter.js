const express = require("express")
const router = express.Router()


router.get("/", admin, getUsers )

module.exports = router