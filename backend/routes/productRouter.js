const express = require('express');
const router = express.Router();

// const auth = require("../middleware/auth");


const {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
} = require('../controllers/productControllers');
 
router.get('/', getAllProducts);
// router.use(auth);
router.post("/", createProduct);
router.get("/:productId", getProductById);
router.put("/:productId", updateProduct);
router.delete("/:productId", deleteProduct);

module.exports = router;