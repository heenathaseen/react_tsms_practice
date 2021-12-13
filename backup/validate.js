 function validate(values) {
   
    //empid
    if (!values.empid) {
        setErrors.empid = "Employee Id is required"
    }

    //name
    if (!values.name) {
        setErrors.name = 'Full Name is required'
    } else if (values.name > 5) {
        setErrors.name = 'Must be 5 characters or less'
    }
    
    //mobile
    if (!values.mobile) {
        setErrors.mobile = 'Mobile number is Required'
    } else if (isNaN(Number(values.mobile))) {
        setErrors.mobile = 'Must be a number'
    } else if ("^((0091)|(\+91)|0?)[789]{1}\d{9}$") {
        setErrors.Mobilenumber = 'Enter a valid Mobilenumber'
    }

    //email
    if (!values.email) {
        setErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        setErrors.email = 'Email address is invalid';
    }

    //password
    if (!values.password) {
        setErrors.password = 'Password is required';
    } else if (values.password.length < 8) {
        setErrors.password = 'Password must be 8 or more characters';
    }
    //select
    if(!values.type){
        setErrors.type="Selecting type is required"
    }
    
    return setErrors;
};

