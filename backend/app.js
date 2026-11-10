const express = require("express");
const app = express();
const cors = require('cors');
const productRouter = require("./routes/productRouter");
const userRouter = require("./routes/userRouter");
const cartRouter = require("./routes/cartRouter")
const checkoutRouter = require("./routes/checkoutRouter")
const orderRouter = require("./routes/orderRouter")
const adminRouter = require("./routes/adminRouter")
const loginRouter = require("./routes/loginRouter")
const {
    unknownEndpoint,
    errorHandler,
  } = require("./middleware/customMiddleware");
const connectDB = require("./config/db");//Needed For: Connecting your backend to a database.


//This line loads environment variables from a .env file into process.env.
//  It allows you to store sensitive information (like database credentials, 
// API keys) separately from your code.
require("dotenv").config(); //===const dotenv  = require("dotenv");//dotenv.config();
//Needed For: Accessing sensitive data like MONGO_URI or PORT.

console.log("MONGO_URI:", process.env.MONGO_URI); // Debugging step
connectDB();
app.use(cors());//allows backend communicate with frontend


// Middleware to parse JSON
app.use(express.json());
// API Routes
app.use("/api/products", productRouter)
app.use("/api/users", userRouter)
app.use("/api/login", loginRouter)
app.use("/api/cart",cartRouter )
app.use("/api/checkout", checkoutRouter)
app.use("/api/orders", orderRouter )
//admin routes
app.use("/api/admin/users", adminRouter)


// Use the unknownEndpoint middleware for handling undefined routes
app.use(unknownEndpoint);
// Use the errorHandler middleware for handling errors
app.use(errorHandler);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server started at http://localhost:${port}`));


