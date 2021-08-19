import React, {useState} from 'react';

const BigForm = (props) => {
    return(
      <div className="card">
      <img className="card-img-top" src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt=""/>
          <div className="card-body">
              <h4 className="card-title">Title</h4>
              <div className="form d-flex">
              <h4 className="card-text">
              <form action="">
                First Name: <input type="text" name="firstName" /><br></br><br></br>
                Last Name: <input type="text" name="lastName" /><br></br><br></br>
                Date & Time: <input type="datetime-local" name="resDate"/><br></br><br></br>
                Phone Number: <input type="number" name="phone" /><br></br><br></br>
                Email Address: <input type="email" name="email" /><br></br><br></br>
                Confirm Email Address: <input type="email" name="confirmEmail" /><br></br><br></br>
                <input type="submit" value="Reserve" className="btn btn-success"/>
              </form>
              </h4>
              </div>
          </div>
  <div>
</div>
</div>
    )
}
export default BigForm;