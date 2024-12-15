const { json } = require('express');

const fs=require('fs');

const {promisify}=require('util');

const appendFile=promisify(fs.appendFile);

 

const errorLogger=async (err,req,res,next)=>{

    try{

        await appendFile('errorLogger.txt',JSON.stringify(err));

        next();

    }

    catch(err){

        next(err);

    }

}

 

module.exports= errorLogger;