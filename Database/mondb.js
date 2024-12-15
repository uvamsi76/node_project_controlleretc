const mongoose=require('mongoose');

 

mongoose.connect("mongodb://127.0.0.1:27017/testdatabase")

.then(()=> console.log("Connection to DB successfull"))

.catch(()=> console.log("Connection to DB failed"))

 

const userSchema=new mongoose.Schema(

    {

        userId:{

            type:Number,

            required:true,

        },

        name:{

            type:String,

            required: true,

        },

        gender:{

            type:String,

            required:true,

        },

        mobileNumber:{

            type:Number,

        },

        emailId:{

            type:String,

            required:true,

           

        },

        password:{

            type:String,

            required:true,

        },

    },

    {

        timestamps:{

            createdAt:true,

            updatedAt:true,

        }

    }

 

)

 

const users=mongoose.model("users",userSchema)

 

module.exports={users}