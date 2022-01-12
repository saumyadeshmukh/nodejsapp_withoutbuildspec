const express = require('express');
const dotenv= require('dotenv');
const cors = require('cors');
//require('./models/personss');
const app=express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
// app.get('/',(req,res) => {
//     res.send("Hello world");
// })

const connectDB = require('./config/db');


dotenv.config({path:'./config/config.env'});

connectDB();

app.use('/',require('./routes/index'));


app.listen(3000);
