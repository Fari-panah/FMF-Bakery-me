const express = require("express")
const {createCheckout, updateCheckout, createFinalize } = require("../controllers/")
const protect = require("../middleware/authMiddleware")
const router = express.Router()



router.post("/",protect,  createCheckout)
router.put("/:id/pay",protect,  updateCheckout)
router.post("/:id/finalize",protect, createFinalize)






module.exports = router