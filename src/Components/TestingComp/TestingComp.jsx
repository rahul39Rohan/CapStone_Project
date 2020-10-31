import "./TestingComp.css";
import React from "react";

function template() {
  return (

    <div className="testing-comp mx-auto my-3 animated  zoomIn slow   ">
     

        
      <div class="form1">

      <form className="mx-auto px-auto">
        <p className="h2 font-weight-bold mt-1 mb-3 text-center">Registration</p>
        <div className="form-group ">
          <input type="text" placeholder="First Name" className="form-control"
          onChange={(e)=>this.setState({
            ...this.state,
            firstname:e.target.value
          })} 
          />
        </div>

        <div className="form-group">
          <input type="text" placeholder="Last name" className="form-control" 
          onChange={(e)=>this.setState({
            ...this.state,
            lastname:e.target.value
          })}
          />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email" className="form-control" 
          onChange={(e)=>this.setState({
            ...this.state,
            email:e.target.value
          })}
          />
        </div>

        <div className="form-group">
          <input type="password" placeholder="password" className="form-control" 
          onChange={(e)=>this.setState({
            ...this.state,
            password:e.target.value
          })}
          />
        </div>

        <div className="form-group">
          <input type="number" placeholder="Phone number" className="form-control"
          onChange={(e)=>this.setState({
            ...this.state,
            mobilenumber:e.target.value
          })}
          />
        </div>
       
        <div class="form-check"
        onChange={(e)=>this.setState({
          ...this.state,
          gender:e.target.value
        })}
        >
                    <label className="form-check-label h6 font-weight-bold">Select Gender</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio" value="male" name="gender" class="form-check-input" />
                    <label className="form-check-label h6 font-weight-bold">Male</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio" value="female" name="gender" class="form-check-input" />
                    <label className="form-check-label  h6 font-weight-bold">Female</label>
                </div>

        <div className="form-group mt-2"
        onChange={(e)=>this.setState({
          ...this.state,
          city:e.target.value
        })}
        >
                    <select className="form-control">
                        <option>Select City</option>
                        <option>Karimnagar</option>
                        <option>Dhule</option>
                        <option>Warangal</option>
                        <option>Latur</option>
                    </select>
                </div>
                <input value="Register" type="submit" className="btn btn-outline-white font-weight-bold mt-2 mx-auto" onClick={this.getdata} />
      </form>
       </div>
  
    </div>
    
  );
};

export default template;
