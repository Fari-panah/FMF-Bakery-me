const express = require("express")
const protect = require("../middleware/authMiddleware")
const router = express.Router()

router.get("/my-orders",protect, getOrders )
router.get("/:id", protect, getOrder)



module.exports = router