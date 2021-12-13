import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
const schema = yup.object().shape({
    name: yup.string().required().min(5),
    empid: yup.string().required().min(5),
    mobile: yup.number().min(10).max(10).required(),
    email: yup.string().email(' Email must include @ and .com').required(),
    password: yup.string().min(8).max(8).required(),
    type:yup.string().required()
});

const Withyup = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = data => console.log(data);
    return (
        <div className="container">

            <h3 className="add-emp">Add Employee</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="d-grid gap-0 d-sm-flex justify-content-center min-display">
                    <div> <input type="text" className="shadow-sm rounded px-3  py-2 me-5 mb-3" placeholder="Name*" {...register("name")} />
                        <p style={{ color: "red" }}>{errors.empid?.message}</p></div>
                    <div>
                        <input type="text" className="shadow-sm rounded px-3  py-2 me-5 mb-3" placeholder="Employee id* " {...register("empid")} />
                        <p style={{ color: "red" }}>{errors.name?.message}</p>

                        </div>
                    <div>
                        <input type="text" className="shadow-sm rounded px-3  py-2 me-5 mb-3" placeholder="Mobile*" {...register("mobile")} />
                        <p style={{ color: "red" }}>{errors.mobile?.message}</p>

                    </div>
                </div>
                <div className="d-grid gap-0 d-sm-flex justify-content-center  min-display">
                    <div>
                        <input type="email" className="shadow-sm rounded  px-3 py-2 me-5  mb-3" placeholder="Email*"{...register("email")} />
                        <p style={{ color: "red" }}>{errors.email?.message}</p>

                    </div>
                    <div>
                        <input type="password" className="shadow-sm rounded px-3 py-2 me-5  mb-3 " placeholder="Password*" {...register("password")} />
                   
                                           <p style={{ color: "red" }}>{errors.password?.message}</p>
 </div>
                    <div>
                        <select className="shadow-sm rounded ps-3 pe-5 py-2 me-5  mb-3 " name="type" {...register("type")} >
                            <option defaultValue>Type*</option>
                            <option value="admin">Admin</option>
                            <option value="normal">Normal</option>
                        </select>
                        <p style={{ color: "red" }}>{errors.type?.message}</p>
</div>



                </div>

                <div className="custom-button">
                    <button className="submit-button me-3" type="submit">Submit</button>
                    <button className="cancel-button" type="button">Cancel</button>
                </div>

            </form>
        </div>

    );
}
export default Withyup;