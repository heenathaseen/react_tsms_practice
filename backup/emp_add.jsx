import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const EmpAdd = () => {
    return (
        <div className="container-fluid">
            <div className="nav">
                <div>dashboard</div>
                <div>profile</div>
                <div>projects</div>
                <div>clients</div>
                <div>timesheet</div>
            </div>

            <div className="container ml-5 mr-5" style={{backgroundColor:"red"}}>
                <form action="">
                    <div className="row justify-content-between">
                        {/* <div className="col-md col-lg-4 col-sm-2" style={{backgroundColor:"green"}}> </div> */}
                        <input className="col-md-4 col-lg-4 ms-md-auto col-sm-1" type="text" name="Name*" />
                        <input  className="col-md-4 col-lg-4 col-sm-1"type="text" name="Employee Id*" />
                        <input  className="col-md-4 col-lg-4 col-sm-1" type="text" name="Email*" />
                        {/* <div className="col-md col-lg-4 col-sm-2" style={{backgroundColor:"blue"}}>  </div>
                        <div className="col-md col-lg-4 col-sm-2" style={{backgroundColor:"yellow"}}> </div> */}


                    </div>
                    <div className="row justify-content-between">
                        <div className="col-md-4 col-lg-4" style={{backgroundColor:"green"}}>
                            <input type="text" name="Mobile*" />
                        </div>
                        <div className="col-md-4 col-lg-4" style={{backgroundColor:"blue"}}>
                            <input type="text" name="Password*" />
                        </div>
                        <div className="col-md-4 col-lg-4" style={{backgroundColor:"yellow"}}>
                            <input type="text" name="Type*" />
                        </div>
                    </div>
                    
                    <div>
                        <div>submit</div>
                        <div>cancel</div>
                    </div>
                    <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity"/>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip"/>
  </div>
                </form>
            </div>



            <div className="row">
                <div className="col-2">side</div>
                <div className="col-10">
                    <div className="mx-5" style={{backgroundColor:"pink"}}>
                    <div className="row justify-content-between">
                    <div className="col-md-4 col-lg-4" style={{backgroundColor:"green"}}>
                            <input type="text" name="Mobile*" />
                        </div>
                        <div className="col-md-4 col-lg-4" style={{backgroundColor:"blue"}}>
                            <input type="text" name="Password*" />
                        </div>
                        <div className="col-md-4 col-lg-4" style={{backgroundColor:"yellow"}}>
                            <input type="text" name="Type*" />
                        </div>

                    </div>
                </div>
                    </div>
                  
            </div>
            <div className="grid">
                        {/* <div className="col-md col-lg-4 col-sm-2" style={{backgroundColor:"green"}}> </div> */}
                        <div className="g-row-4 ">  <input  type="text" name="Name*" /></div>
                        <div className="g-row-4" >   <input  type="text" name="Employee Id*" /></div>
                        <div  className="g-row-4 ">  <input  type="text" name="Email*" /></div>
                      
                     
                      
                        {/* <div className="col-md col-lg-4 col-sm-2" style={{backgroundColor:"blue"}}>  </div>
                        <div className="col-md col-lg-4 col-sm-2" style={{backgroundColor:"yellow"}}> </div> */}


                    </div>
  

  

        </div>
    );
}
export default EmpAdd;