import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router'

const Edit = (props) => {
    const [form, setForm] = useState({
        "name": "",
        "color": "",
        "feel": "",
        "weight": 0,
        "foundDate": new Date()
    })

    useEffect(() => {
        axios.get(`http://localhost:8000/api/rocks/${props.id}`)
        .then(res => setForm(res.data.rock))
        .catch(err => console.log(err))
    }, [props._id])
    
    const onChangeHandler = (event) => {
        setForm({
        ...form,
        [event.target.name]: event.target.value,
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()
    
        axios.put(`http://localhost:8000/api/rocks/update/${props.id}`, form)
        .then(res => {
            console.log(res);
            navigate('/')
        })
        .catch(err => console.log(err))
        document.forms['edit_rock'].reset()
    }


    return(
        <div>
            <h1 className="m-3 w-50 mx-auto">Edit Rock!</h1>
            <form className="m-3 w-50 mx-auto" name="edit_rock" onSubmit={onSubmitHandler}>
            
            <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" className="form-control" value={form.name} onChange={onChangeHandler} />
            </div>
    
            <div className="form-group">
            <label htmlFor="color">Color:</label>
            <input type="text" name="color" className="form-control" value={form.color} onChange={onChangeHandler}/>
            </div>
    
            <div className="form-group">
            <label htmlFor="feel">Feel:</label>
            <input type="text" name="feel" className="form-control" value={form.feel} onChange={onChangeHandler}/>
            </div>
    
            <div className="form-group">
            <label htmlFor="weight">Weight:</label>
            <input type="text" name="weight" className="form-control" value={form.weight} onChange={onChangeHandler}/>
            </div><br></br>
            <input type="submit" value="Edit rock" className="btn btn-warning" />
            </form>
        </div>
    )
}

export default Edit;