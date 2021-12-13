import React from 'react';


const Try = () => {
    return (
        <div className="container">
            <h3 className="add-emp">Add Employee</h3>
             <div className="container d-flex justify-content-center ">
           
           <form action="">
               <div className="container-fluid d-flex-lg d-flex-md d-flex-sm justify-content-center">
                <div className="row mt-5 large-screen d-flex-sm">
                       <div className="col-lg col-md col-sm-4">
                           <input type="text" className="shadow-sm rounded px-3  py-2 me-2" placeholder="Name*" />
                       </div>
                       <div className="col-lg col-md col-sm-4">
                           <input type="text" className="shadow-sm rounded px-3  py-2 me-2 " placeholder="Employee id*" />
                       </div>
                       <div class="col-lg col-md col-sm-4">
                           <input type="text" className="shadow-sm rounded px-3  py-2 me-2" placeholder="Email*" />
                       </div>
                   </div>
                   <div className="row small-screen ">
                       <div className="col-lg col-md col-sm-4 ">
                           <input type="text" className="shadow-sm rounded  px-3  py-2 me-2" placeholder="Name*" />
                       </div>
                       <div className="col-lg col-md col-sm-4">
                           <input type="text" className="shadow-sm rounded px-3  py-2 me-2 " placeholder="Employee id*" />
                       </div>
                       <div className="col-lg-4 col-md col-sm-4">
                           <input type="text" className="shadow-sm rounded px-3  py-2 me-2" placeholder="Email*" />
                       </div>
                   </div>
                  
               </div>
              
                 
               

           </form>
          
       </div>
            
            <div className="container-fluid d-sm-flex justify-content-end ">
        <div className="d-grid gap-2 d-sm-flex justify-content-end mt-3">
              <button className="submit-button" type="button">Submit</button>
              <button className="cancel-button" type="button">Cancel</button>
          </div>
        </div></div>
       
    );
}
export default Try;