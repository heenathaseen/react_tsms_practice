import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Emp = () => {
    return (
        <div className="container-fluid ">
            <div className="row">
                <div className="col-2">side</div>
                <div className="col-10" >
                <form action="">
                    <div className="container w-75 w-sm-75 justify-content-md-left justify-content-sm-left ms-0">
                       
                            <div class="row mb-3">
                                <div class="col-md col-sm me-3">
                                    <input type="text" class="form-control" placeholder="Name*"  />
                                </div>
                                <div class="col-md col-sm me-3">
                                    <input type="text" class="form-control" placeholder="Employee id*" />
                                </div>
                                <div class="col-md col-sm me-3">
                                    <input type="text" class="form-control" placeholder="Email*"  />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md col-sm me-3">
                                    <input type="text" class="form-control" placeholder="Mobile*"  />
                                </div>
                                <div class="col-md col-sm me-3">
                                    <input type="text" class="form-control" placeholder="Password*"  />
                                </div>
                                <div class="col-md col-sm me-3">
                                    <input type="text" class="form-control" placeholder="Type*"  />
                                </div>
                            </div>
                           
                      




                    </div>
                    <div className="me-lg-5 me-md-5 me-sm-5 ">
                    <div class="d-grid gap-2 d-lg-flex d-md-flex d-sm-flex justify-content-end mt-3 me-5">
                                <button class="btn btn-primary btn-sm me-md-2 px-4 me-5" type="button">Submit</button>
                                <button class="btn btn-primary btn-sm px-4" type="button">Cancel</button>
                            </div>
                    </div>
                    </form>
               
                </div>


            </div>



        </div>
    );
}
export default Emp;