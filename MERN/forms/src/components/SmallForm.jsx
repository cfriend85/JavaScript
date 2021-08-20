import React, {useState} from 'react';

const SmallForm = (props) => {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        resDate: "",
        phone: "",
        email: "",
        confirmEmail: ""
    })

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const nameValid = (str) => {
        return str.length >= 3;
    }

    const phoneValid = (str) => {
        return str.length === 10;
    }

    const allValid = (allInputs) => {
        return nameValid(allInputs.firstName) && nameValid(allInputs.lastName) && phoneValid(allInputs.phone)
    }


    return(
        <div className="card">
        <img className="card-img-top" src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt=""/>
            <div className="card-body">
                <h4 className="card-title">Your Reservation</h4>
                <div className="form d-flex">
                <h4 className="card-text">
                <form action="">
                    {/* {nameValid(form.firstName) ? <h3>Valid</h3> : <span className="alert-danger">First name be at least 3 characters!</span>}<br></br> */}
                    {!nameValid(form.firstName) && form.firstName.length != 0 && <span className="alert-danger">First name be at least 3 characters!</span>}<br></br>
                    First Name: <input type="text" name="firstName" onChange={onChangeHandler}/><br></br><br></br>
                    {/* {nameValid(form.firstName) ? <h3>Valid</h3> : <span className="alert-danger">Last name be at least 3 characters!</span>}<br></br> */}
                    {!nameValid(form.lastName) && form.lastName.length != 0 && <span className="alert-danger">Last name be at least 3 characters!</span>}<br></br>
                    Last Name: <input type="text" name="lastName" onChange={onChangeHandler}/><br></br><br></br>
                    Date & Time: <input type="datetime-local" name="resDate" onChange={onChangeHandler}/><br></br><br></br>
                    {!phoneValid(form.phone) && form.phone.length != 0 && <span className="alert-danger">Phone number must contain 10 digits!</span>}<br></br>
                    Phone Number: <input type="number" name="phone" onChange={onChangeHandler}/><br></br><br></br>
                    Email Address: <input type="email" name="email" onChange={onChangeHandler}/><br></br><br></br>
                    Confirm Email Address: <input type="email" name="confirmEmail" onChange={onChangeHandler}/><br></br><br></br>
                    {
                        allValid(form) ? <input type="submit" value="Reserve" className="btn btn-success"/> : 
                        <input type="submit" value="Reserve your table!" className="btn btn-success" disabled/>
                    }
                </form>
                </h4>
            </div>
        </div>
    <div>
</div>
</div>
    )
}

export default SmallForm;