const Cart = require("../models/cartModel")
const Product = require("../models/productModel")


// Get the user's cart(whatevere there is in cartbasket)
const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id })
      .populate("products.productId");

    if (!cart) {
      return res.status(200).json({
        products: [],
        totalPrice: 0,
      });
    }

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a product to the cart
const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    if (!productId || !Number.isInteger(quantity) || quantity < 1) {
      return res.status(400).json({
        message: "Valid productId and quantity are required",
      });
    }

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    let cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      cart = new Cart({
        user: req.user._id,
        products: [],
      });
    }

    const existingItem = cart.products.find(
      (item) => item.productId.toString() === productId
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.products.push({
        productId: product._id,
        itemPrice: product.price,
        itemdescriptionription: product.descriptionription,
        quantity,
      });
    }

    cart.totalPrice = cart.products.reduce(
      (total, item) => total + item.itemPrice * item.quantity,
      0
    );

    const savedCart = await cart.save();

    res.status(200).json(savedCart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update product quantity
const updateCartItem = async (req, res) => {
  try {
    const { quantity } = req.body;
    const { productId } = req.params;

    if (!Number.isInteger(quantity) || quantity < 1) {
      return res.status(400).json({
        message: "Quantity must be at least 1",
      });
    }

    const cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const item = cart.products.find(
      (item) => item.productId.toString() === productId
    );

    if (!item) {
      return res.status(404).json({
        message: "Product not found in cart",
      });
    }

    item.quantity = quantity;

    cart.totalPrice = cart.products.reduce(
      (total, item) => total + item.itemPrice * item.quantity,
      0
    );

    const updatedCart = await cart.save();

    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Remove a product from the cart
const removeFromCart = async (req, res) => {
  try {
    const { productId } = req.params;

    const cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    cart.products = cart.products.filter(
      (item) => item.productId.toString() !== productId
    );

    cart.totalPrice = cart.products.reduce(
      (total, item) => total + item.itemPrice * item.quantity,
      0
    );

    const updatedCart = await cart.save();

    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Clear the cart
const clearCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    cart.products = [];
    cart.totalPrice = 0;

    const updatedCart = await cart.save();

    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getCart,
  addToCart,
  updateCartItem,
  removeFromCart,
  clearCart,
};
