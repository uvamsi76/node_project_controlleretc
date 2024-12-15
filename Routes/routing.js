const express = require('express');

const routing= express.Router();

const tracking=require('../controller/tracker');





routing.get('/entry/:id',tracking.getfunc);

 

routing.post('/login',tracking.loginfunc);

routing.post('/posting/',tracking.postfunc);

routing.put('/updating/:id',tracking.putfunc);

routing.delete('/deleting/',tracking.deletefunc);

routing.all('*',tracking.allfunc);

 

module.exports=routing;