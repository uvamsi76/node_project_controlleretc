const express = require('express'); // require the express module

const app= express(); //creating the app object

 

const route= require('./Routes/routing')

const bodyparser = require('body-parser');

 

const loggerData=require('./utilities/requestLogger')

const errorData=require('./utilities/errorLogger')

 

const PORT = process.env.port || 4000;

 

app.use(bodyparser.json()); // middleware

app.use(loggerData);

app.use(errorData);

app.use('/',route);

app.listen(PORT,()=>{

    console.log(`Server running at port ${PORT}`);

});