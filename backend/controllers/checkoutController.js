const Checkout = require("../models/checkoutModel")
const Cart = require("../models/cartModel")
const Product = require("../models/productModel")
const Order = require("../models/productModel")

//create a new checkout session
const createCheckout = async (req, res) => {
    const {checkoutItems, shippingAddress, paymentMethod, totalPrice} = req.body
    if (!checkoutItems || checkoutItems.length === 0) {
        return res.status(400).json({ message: "no items in checkout"})}
        try {
            const newCheckout = await Checkout.create({
                user: req.user._id,
                checkoutItems: checkoutItems,
                shippingAddress,
                paymentMethod,
                totalPrice,
                paymentStatus: "Pending",
                isPaid: false
            })
            console.log(`checkout created for user: ${req.user._id}`)
        } catch (error) {
            res.status(400).json({ message: "Failed to checkout", error: error.message });
       }
            
        }
        //update checkout to mark as paid after. successful payment
    const updateCheckout = async (req, res) => {
        const { paymentStatus, paymentDetails } = req.body
        try {
            const checkout = await Checkout.findById(req.params.id)
            if (!checkout){
                return res.status(404).json({message: "checkout not found"})

            }
            if (paymentStatus === "paid"){
                checkout.isPaid = true
                checkout.paymentStatus = paymentStatus
                checkout.paymentDetails = paymentDetails
                checkout.paidAt = Date.now()

                await checkout.save()
                return res.status(200).json(checkout)
                
            }
                res.status(400).json({message: "Invalid payment status"})
            
            } catch (error) {
                console.error(error);

                return res.status(500).json({
                message: error.message,
                });
            }

    }

    const createFinalize = async(req, res) => {
        try {
            const checkout = await Checkout.findById(req.params.id)

            if(!checkout){
                return res.status(404).json({message: "Checkout not found"})
            }
            if (checkout.isPaid && !checkout.isFinalized){
                //create final order based on the checkout details
                const finalOrder = await Order.create({
                    user: checkout.user,
                    orderItems: checkout.checkoutItems,
                    shippingAddress: checkout.shippingAddress,
                    paymentMethod: checkout.paymentMethod,
                    totalPrice: checkout.totalPrice,
                    isPaid: true,
                    paidAt: checkout.paidAt,
                    isDelivered: false,
                    paymentStatus: "paid",
                    paymentDetails: checkout.paymentDetails

                })
                //mark the checkout as finalized
                checkout.isFinalized = true
                checkout.finalizedAt = Date.now()
                await checkout.save()
                //delete the cart associated
                await Cart.findOneAndDelete({user: checkout.user})
                res.status(201).json(finalOrder)

            }else if(checkout.isFinalized) {
                res.status(400).json({message: "checkout already finalized"})
            }else {
                res.status(400).json({message: "checkout is not paid"})
            }
            
        } catch (error) {
            console.log(error)
            res.status(500).json({message: "Server Error"})
            
        }


    }

    module.exports = { createCheckout, updateCheckout, createFinalize }
