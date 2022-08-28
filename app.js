
const express = require('express');
const mongoose = require('mongoose')

require('dotenv').config();


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const cors = require('cors')

const app = express();


app.use(cors())
app.use(express.json());



app.use('/', indexRouter);
app.use('/user', usersRouter);



 mongoose.connect(process.env.MONGO_URL, () => {
  console.log("connected to mongoDB")
}).then( app.listen(5000, () => {
    console.log(`Node.js app is runing`);
  }))
 
  
 





module.exports = app;
