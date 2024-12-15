const {users}=require("../Database/mondb")

const validator=require('../utilities/validators')

 

exports.getfunc=async (req,res,next)=>{

    try{

        let thenewuser=await users.find({userId:req.params.userId},{_id:0,__v:0})

 

        if(thenewuser.length>0){

            res.status(200).json({

                message:"found the users",

                data:{thenewuser}

            })

        }

        else{

            res.status(400).json({

                message: "No user found"

            }

            )

        }

    }

    catch(err){

        const error={status:400,message: "No user found"}

        next(error)

        }

    };

 

exports.postfunc= async (req,res,next)=>{

    try{

 

        let userExist= await users.findOne({emailId:req.body.emailId});

        if(userExist){

            return res.status(400).send("User already Exist");

        }

 

        else if(validator.validEmailId(req.body.emailId) &&

        validator.validatePassword(req.body.password) &&

        validator.validatePhoneNo(req.body.mobileNumber))

        {

            const user=new users({

                userId : req.body.userId,

                name : req.body.name,

                gender : req.body.gender,

                mobileNumber: req.body.mobileNumber,

                emailId: req.body.emailId,

                password : req.body.password

            });

            //await user.save();

            res.status(201).json({

                status:"success",

                message:"User registered successfully",

                data:{user},

            })

        }

       

        else if (!(validator.validEmailId(req.body.emailId)))

        {

            res.status(400).json({status:"error", message:"incorrect emailId format"})

        }

        else if(!(validator.validatePassword(req.body.password)))

        {

            res.status(400).json({status:"error", message:"incorrect password format"})

        }

        else if(!(validator.validatePhoneNo(req.body.mobileNumber)))

        {

            res.status(400).json({status:"error", message:"Mobile should be 10 digits"})

        }

    }

        catch(err){

            const error={status:400,message: "No user found"}

            next(error)

            }

};

 

exports.loginfunc= async(req,res)=>{

    try{

        let userData= await users.findOne({emailId:req.body.userId,password:req.body.password})

        if(userData)

        {

            res.send(200).json({message:"User login successfully",

        data:{userData}})

        }

        else{

            res.send(400).json({message:"User Login Failed"})

        }

    }

 

    catch(err){

        const error={status:400,message: "No user found"}

        //next(error)

        }

}

exports.putfunc= async(req,res,next)=>{

    try{

        const uset={

            userId : req.body.userId,

            name : req.body.name,

            gender : req.body.gender,

            mobileNumber: req.body.mobileNumber,

            emailId: req.body.emailId,

            password : req.body.password

        };

        const notes= await users.findOneAndUpdate(

            {notesID:req.params.userId},user,{

                new:true, // to return new doc back

                runValidators:true, // to run validators which specifies in the model

            }

        );

        res.status(201).json({message:"User Updated successfully",data:{notes}})

    }

    catch(err){

        const error={status:400,message: "No user found"}

        next(error)

    }

};

 

exports.deletefunc= async (req,res,next)=>{

    try{

       let deletedUser= await users.deleteOne({userId:req.params.userId});

       if(deletedUser.deletedCount!=0){

        res.status(200).json({message:"user deleted succesfully"})

       }

       else{

        res.status(400).json({message:"Not able to delete user"})

       }

 

    }

    catch(err){

        const error={status:400,message: "No user found"}

        next(error)

    }

};

 

exports.allfunc=(req,res)=>{

    res.status(404).json({

        status:"Failed",

        message:"Invalid path"

    })

};