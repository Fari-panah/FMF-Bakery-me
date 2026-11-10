const express = require('express');
const router = express.Router();
const adminOnly = require("../middleware/adminMiddleware")
const protect = require("../middleware/authMiddleware")

const {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    getBestSeller
} = require('../controllers/productControllers');
 
router.get('/', getAllProducts);
router.get("/best-seller", getBestSeller)
router.get("/:productId", getProductById);
router.post("/",protect, adminOnly, createProduct);
router.put("/:productId",protect, adminOnly, updateProduct);
router.delete("/:productId",protect, adminOnly, deleteProduct);

module.exports = router;