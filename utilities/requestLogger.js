const fs=require('fs');

const {promisify}=require('util');

const appendFile=promisify(fs.appendFile);

 

async function requestLogger(req,res,next){

    try{

        const logMessage=`${req.url}---${req.method}- at - time:${new Date()} \n`;

        await appendFile('loggingdetails.txt',logMessage);

        next();

    }

    catch(err){

        next(err);

    }

}

 

module.exports=requestLogger;