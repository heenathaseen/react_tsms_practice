import React, { useState } from 'react';

function EmployeeForm() {

    const [formData, setFormData] = useState({
        name: '',
        empid: '',
        mobile: '',
        email: '',
        password: '',
        type: ''
    });
    const [errors, setErrors] = useState({});

    //validation
    function validate({empid}) {
        
        if (empid==='') {
            setErrors({empid: "Employee Id is required"})
        }else if(empid!==String){
            setErrors({empid: "Employee Id is required"})
        }
        return empid;

        // //name
        // if (!values.name) {
        //     setErrors.name = 'Full Name is required'
        // } else if (values.name > 5) {
        //     setErrors.name = 'Must be 5 characters or less'
        // }

        // //mobile
        // if (!values.mobile) {
        //     setErrors.mobile = 'Mobile number is Required'
        // } else if (isNaN(Number(values.mobile))) {
        //     setErrors.mobile = 'Must be a number'
        // } else if ("^((0091)|(\+91)|0?)[789]{1}\d{9}$") {
        //     setErrors.Mobilenumber = 'Enter a valid Mobilenumber'
        // }

        // //email
        // if (!values.email) {
        //     setErrors.email = 'Email address is required';
        // } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        //     setErrors.email = 'Email address is invalid';
        // }

        // //password
        // if (!values.password) {
        //     setErrors.password = 'Password is required';
        // } else if (values.password.length < 8) {
        //     setErrors.password = 'Password must be 8 or more characters';
        // }
        // //select
        // if (!values.type) {
        //     setErrors.type = "Selecting type is required"
        // }

    };


    //onsubmit
    function onSubmit(event) {
        event.preventDefault();
        validate(formData) ? console.log(formData) : console.log('invalid');
    }

    //onchange
    function onChange({ target }) {
        const value = target.value;
        setFormData(prevState => ({
            ...prevState,
            [target.name]: value
        }))
    }


    return (
        <div className="container">
            <h3 className="add-emp">Add Employee</h3>
            <div className="container d-flex justify-content-center ">
               
                <form onSubmit={onSubmit}>
                    <div className="container-fluid d-flex-lg d-flex-md d-flex-sm justify-content-center">
                        <div className="row mt-5 large-screen d-flex-sm">
                            <div className="col-lg col-md col-sm-4">
                                <input type="text" className="shadow-sm rounded px-3  py-2 me-2" placeholder="Name*" name="name" value={formData.name} onChange={onChange} required />
                            </div>
                            <div className="col-lg col-md col-sm-4">
                                <input type="text" className="shadow-sm rounded px-3  py-2 me-2 " placeholder="Employee id*" name="empid" value={formData.empid} onChange={onChange} required />
                            </div>
                            {errors.empid && <p style={{ color: "red" }}>{errors.empid}</p>}

                            <div className="col-lg col-md col-sm-4">
                                <input type="text" className="shadow-sm rounded px-3  py-2 me-2" placeholder="mobile*" name="mobile" value={formData.mobile} onChange={onChange} required />
                            </div>
                        </div>
                        <div className="row small-screen ">
                            <div className="col-lg col-md col-sm-4 ">
                                <input type="text" className="shadow-sm rounded  px-3  py-2 me-2" placeholder="Email*" name="email" value={formData.email} onChange={onChange} required />
                            </div>
                            <div className="col-lg col-md col-sm-4">
                                <input type="text" className="shadow-sm rounded px-3  py-2 me-2 " placeholder="Password*" name="password" value={formData.password} onChange={onChange} required />
                            </div>
                            <div className="col-lg col-md col-sm-4">
                                <select className="shadow-sm rounded ps-3 pe-5 py-1 me-5 selected form-control" name="type" value={formData.type} onChange={onChange} required>

                                    <option defaultValue>Type*</option>
                                    <option value="admin">Admin</option>
                                    <option value="normal">Normal</option>

                                </select>

                            </div>
                        </div>

                    </div>
                    <div className="container-fluid d-sm-flex justify-content-end media-button">
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-3 ">
                            <button className="submit-button" type="submit">Submit</button>
                            <button className="cancel-button" type="button">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    );
}
export default EmployeeForm;