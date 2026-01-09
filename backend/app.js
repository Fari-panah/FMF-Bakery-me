const express = require("express");
const app = express();
const cors = require('cors');
const productRouter = require("./routes/productRouter");
const userRouter = require("./routes/userRouter");
const {
    unknownEndpoint,
    errorHandler,
  } = require("./middleware/customMiddleware");
const connectDB = require("./config/db");//Needed For: Connecting your backend to a database.



//const morgan = require("morgan");
//app.use(morgan("dev"));

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

// Use the unknownEndpoint middleware for handling undefined routes
app.use(unknownEndpoint);

// Use the errorHandler middleware for handling errors
app.use(errorHandler);


// Use the productRouter for all "/products" routes
app.use("/api/products", productRouter);

// Use the userRouter for all /users routes
app.use("/api/users", userRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server started at http://localhost:${port}`));


//pass:sC0qBERdaicuugpn -username:farnazj