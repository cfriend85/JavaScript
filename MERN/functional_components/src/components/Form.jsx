import React, {useState} from 'react';

const Form = (props) => {
    const [first, setFirst] = useState("")
    const [last, setLast] = useState("")
    return(
        <div className="border border-rounded m-5 w-50">
            <div className="form-group">
            <label for="first">First Name:</label>
            <input onChange={(event) => setFirst(event.target.value)} type="text" name="first" className="form-control" />
            <label for="last">Last Name:</label>
            <input onChange={(event) => setLast(event.target.value)} type="text" name="last" className="form-control" />
            </div>
        </div>
    )
}

export default Form;