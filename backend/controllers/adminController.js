const User = require("../models/userModel")


//get users, only admin 
const getUsers = async(req, res) => {
    try {
        const users = await User.find({})
        res.status(200).json(users);
        
    } catch (error) {
        res.status(500).json({ message: "Failed to retrieve users" })
        
    }
}
//add a new user (admin only)
const createUser = async (req, res) => {
    const {name, email, password, role } = req.body

    try {
        const user = await User.findOne({ email })
        if (user){
            return res.status(400).json({message: "User already exists"})

        }
        const newUser = new User({
            name,
            email,
            password,
            role: 
        })
        
    } catch (error) {
        
    }
}