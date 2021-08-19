import React, {useState} from 'react';

const BigForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [resDate, setResDate] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  
  const onFirstNameChange = (event) => {
      setFirstName(event.target.value)
  }
  const onLastNameChange = (event) => {
      setLastName(event.target.value)
  }
  const onResDateChange = (event) => {
      setResDate(event.target.value)
  }
  const onPhoneChange = (event) => {
      setPhone(event.target.value)
  }
  const onEmailChange = (event) => {
      setEmail(event.target.value)
  }
  const onConfirmEmailChange = (event) => {
      setConfirmEmail(event.target.value)
  }

    return(
      <div className="card">
      <img className="card-img-top" src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt=""/>
          <div className="card-body">
              <h4 className="card-title">Title</h4>
              <div className="form d-flex">
              <h4 className="card-text">
              <form action="">
                First Name: <input type="text" name="firstName" onChange={onFirstNameChange}/><br></br><br></br>
                Last Name: <input type="text" name="lastName" onChange={onLastNameChange}/><br></br><br></br>
                Date & Time: <input type="datetime-local" name="resDate" onChange={onResDateChange}/><br></br><br></br>
                Phone Number: <input type="number" name="phone" onChange={onPhoneChange}/><br></br><br></br>
                Email Address: <input type="email" name="email" onChange={onEmailChange}/><br></br><br></br>
                Confirm Email Address: <input type="email" name="confirmEmail" onChange={onConfirmEmailChange}/><br></br><br></br>
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