import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Add = () => {
    return (
        
        <div className="container">
            <div className="w-lg-100 w-md-100 w-md-50">
            
            <form action="">
                <div className="p-3 w-75">

                    <div class="row my-5">
                        <div class="col-lg ">
                            <input type="text" class="shadow-sm rounded py-1 ps-3" placeholder="Name*" />
                        </div>
                        <div class="col-lg ">
                            <input type="text" class="shadow-sm rounded p-1 " placeholder="Employee id*" />
                        </div>
                        <div class="col-lg">
                            <input type="text" class="shadow-sm rounded p-1 " placeholder="Email*" />
                        </div>
                    </div>
                    <div class="row my-5">
                        <div class="col-lg col-md col-sm ">
                            <input type="text" class="shadow-sm rounded p-1 " placeholder="Mobile*" />
                        </div>
                        <div class="col-lg col-md col-sm ">
                            <input type="text" class="shadow-sm rounded p-1 " placeholder="Password*" />
                        </div>
                        <div class="col-lg col-md col-sm">
                            <input type="text" class="shadow-sm rounded p-1 " placeholder="Type*" />
                        </div>
                    </div>

                </div>
               
                    <div class="d-grid gap-2 d-lg-flex d-md-flex d-sm-flex justify-content-end mt-3 ">
                        <button class="btn btn-primary btn-sm me-md-2 px-4 me-5" type="button">Submit</button>
                        <button class="btn btn-primary btn-sm px-4" type="button">Cancel</button>
                    </div>
              
            </form>



        </div>
        </div>
    );
}
export default Add;