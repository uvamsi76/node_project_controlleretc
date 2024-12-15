let validators={};

 

validators.validatePassword=(password)=>{

    let passwordRegex=/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;

    if(passwordRegex.test(password)){

        return true;

    }

    else{

        return false;

    }

}

 

validators.validatePhoneNo=(mobileNumber)=>{

    let phonepattern=/^[0-9]{10}$/;

    if(phonepattern.test(mobileNumber)){

        return true;

    }

    else{

        return false;

    }

}

 

validators.validEmailId=(emailId)=>{

    let emailRegex=/^[A-za-z0-9_.]+@[a-z]+.(com|in)$/;

    if(emailRegex.test(emailId)){

        return true;

    }

    else{

        return false;

    }

}

 

module.exports=validators;