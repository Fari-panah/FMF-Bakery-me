const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const User = require("../models/userModel");

const login = async(req, res) => {
    const {email, password} = req.body
    try {
        const user = await User.findOne({ email })
        if(!user){
            return res.status(404).json({
                error: "Email not found"
            })
        }
        const passwordCorrect = await bcrypt.compare(
            password,
            user.passwordHash

        )
        if(!passwordCorrect){
            return res.status(401).json({
                error: "Invalid email or password"
            })
        }
        const userToken = {
            name: user.name,
            id: user._id

        }
        const token = jwt.sign(
            userToken,
            process.env.SECRET,
            {expiresIn: "1h"}
        )
        res.status(200).send({
            token,  
            name: user.name,
            email: user.email
        })
        
    } catch (error) {
         res.status(400).json({error: error.message })
       
    }
   
}
module.exports = login