const express = require('express');
var cors = require('cors');
const sqlRouter = require('./routes/sql_routes');

const app=express();
app.use(express.json());
app.use(cors())

app.use('/sql',sqlRouter);

app.listen(3000,()=>{
    console.log("Server is Running on Port 3000");
});