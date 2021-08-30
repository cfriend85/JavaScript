import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {Link} from "@reach/router";

const Main = (props) => {
    const [rocks, setRocks] = useState([])
    const [form, setForm] = useState({
        "name": "",
        "color": "",
        "feel": "",
        "weight": 0,
        "foundDate": new Date()
    })
    
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/rocks")
        .then(res => {
            setRocks(res.data.rocks);
            setLoaded(true);
        })
        .catch(err => console.log(err))
    }, [loaded])
    
    const onChangeHandler = (event) => {
        setForm({
        ...form,
        [event.target.name]: event.target.value,
        })
    }
    
    const onSubmitHandler = (event) => {
        event.preventDefault()
    
        axios.post("http://localhost:8000/api/rocks/create", form)
        .then(res => {
            console.log(res);
            setLoaded(false);
        })
        .catch(err => console.log(err))
        document.forms['new_rock'].reset()
    }
    
    const onDeleteHandler = (_id) => {
        if(window.confirm("Are you sure you want to delete this item!?")){
            axios.delete(`http://localhost:8000/api/delete/rock/${_id}`)
            .then(res => {
                console.log(res)
                setLoaded(false)
            })
            .catch(err => console.log(err))
        }
    
    }
    
    
        return (
        <div className="App">
            <h1>Full stack time!</h1>
            <form className="m-3 w-25 mx-auto" name="new_rock" onSubmit={onSubmitHandler}>
            
            <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" className="form-control" onChange={onChangeHandler} />
            </div>
    
            <div className="form-group">
            <label htmlFor="color">Color:</label>
            <input type="text" name="color" className="form-control" onChange={onChangeHandler}/>
            </div>
    
            <div className="form-group">
            <label htmlFor="feel">Feel:</label>
            <input type="text" name="feel" className="form-control" onChange={onChangeHandler}/>
            </div>
    
            <div className="form-group">
            <label htmlFor="weight">Weight:</label>
            <input type="text" name="weight" className="form-control" onChange={onChangeHandler}/>
            </div><br></br>
            <input type="submit" value="Add rock" className="btn btn-success" />
            </form>
            <table className="table table-dark">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Color</th>
                    <th>Feel</th>
                    <th>Weight</th>
                    <th>Date Found</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                rocks.map((item, i) => {
                return <tr key={i}>
                <td className="table-light"><Link to={`/edit/rock/${item._id}`}>{item.name}</Link></td>
                <td className="table-light">{item.color}</td>
                <td className="table-light">{item.feel}</td>
                <td className="table-light">{item.weight}</td>
                <td className="table-light">{item.foundDate}</td>
                <td className="table-light"><button className="btn btn-danger btn-sm" onClick={() => onDeleteHandler(item._id)}>Delete</button></td>
                </tr>
                })
            }
            </tbody>
            </table>
        </div>
        );
}

export default Main;