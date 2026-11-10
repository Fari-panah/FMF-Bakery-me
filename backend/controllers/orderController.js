const Order = require("../models/productModel")

//get logged-in user orders
const getOrders = async(req, res) => {
    try {
        const orders = await Order.find({ user: req.user._id}).sort({createdAt: -1})
        res.status(200).json(orders)
    } catch (error) {
        res.status(500).json({message: "failed to find order"})
    }
}
//get order
const getOrder = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id).populate("user", "email")
        if(!order){
            return res.status(404).json({message: "order not found"})
        }
        //return the full order details
        res.json(order)
    } catch (error) {
        console.log(error)
        
    }
}