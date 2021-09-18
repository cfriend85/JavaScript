import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import Form from '../components/Form';
import axios from 'axios';

const Edit = (props) => {

    const [form, setForm] = useState({
        title: "",
        image_url: "",
        year: 0,
        director: "",
        isMovie: false,
        genre: ""
    })

    const [errors, setErrors] = useState({})
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/media/${props._id}`)
            .then(res => setForm(res.data.media))
            .catch(err => console.log(err))
    }, [])

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:8000/api/media/update/${props._id}`, form)
        .then(res => {
            console.log(res);
            if(res.data.error){
                setErrors(res.data.error.errors)
            }
            else{
                console.log("No Errors")
                navigate("/")
            }
        })
        .catch(err => console.log(err))
    }
    return(
        <div>
            <h1>Edit Movie or Show!<Link to="/" className="btn btn-warning btn-lg m-3">Home</Link></h1>
            <Form onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler} form={form} errors={errors}/>
        </div>
    )
}

export default Edit;