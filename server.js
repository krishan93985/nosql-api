require('dotenv').config();
//importing dependencies
const express = require("express");
const cors = require("cors");
const { connectToDb } = require('./connection_helper'); 
const userRoute = require('./routes/user');
const vendorRoute = require('./routes/vendor');

const PORT = process.env.PORT || 3002;

//express instance initialised
const app = express();

//using Access-Control-Allow-Origin to share resources
app.use(cors());

//create connection to database
connectToDb();

//instructing express to use json,urlencoded data transfer
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//route to handle user actions
app.use('/user', userRoute);

//route to handle vendor actions
app.use('/vendor', vendorRoute);

app.get('/', (req,res) => res.status(200).send('Its working'))

app.listen(PORT, () => console.log(`app is listening to port ${PORT}`));
