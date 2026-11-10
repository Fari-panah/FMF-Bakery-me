const express = require("express")
const protect = require("../middleware/authMiddleware")
const {
  getCart,
  addToCart,
  updateCartItem,
  removeFromCart,
  clearCart,
} = require("../controllers/cartController")
const router = express.Router()

router.post("/", getCart)
// Add product to cart
router.post("/", protect, addToCart);
// Update product quantity
router.put("/:productId", protect, updateCartItem);
// Remove product from cart
router.delete("/:productId", protect, removeFromCart);
// Clear entire cart
router.delete("/", protect, clearCart);

module.exports = router;