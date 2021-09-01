import React from 'react';

const Form = (props) => {
    return(
        <div>
            <form className="m-3 w-50 mx-auto" name="edit_rock" onSubmit={props.onSubmitHandler}>
            
            <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" className="form-control" onChange={props.onChangeHandler} value={props.form.name}/>
            <span className="alert-danger">{props.errors.name && props.errors.name.message}</span>
            </div>
    
            <div className="form-group">
            <label htmlFor="ice_cream">Ice Cream:</label>
            <input type="text" name="ice_cream" className="form-control" onChange={props.onChangeHandler} value={props.form.ice_cream}/>
            <span className="alert-danger">{props.errors.ice_cream && props.errors.ice_cream.message}</span>

            </div>
    
            <div className="form-group">
            <label htmlFor="sauce">Sauce:</label>
            <input type="text" name="sauce" className="form-control" onChange={props.onChangeHandler} value={props.form.sauce}/>
            <span className="alert-danger">{props.errors.sauce && props.errors.sauce.message}</span>

            </div>

            <div className="form-group">
            <label htmlFor="color">Color:</label>
            <input type="text" name="color" className="form-control" onChange={props.onChangeHandler} value={props.form.color}/>
            <span className="alert-danger">{props.errors.color && props.errors.color.message}</span>
            </div>
    
            <div className="form-group">
            <label htmlFor="whipped">Whipped?:</label>
            <input type="checkbox" name="whipped" className="form-check-input" onChange={props.onChangeHandler} checked={props.form.whipped}/><br></br>

            <label htmlFor="cherry">Cherry?:</label>
            <input type="checkbox" name="cherry" className="form-check-input" onChange={props.onChangeHandler} checked={props.form.cherry}/>
            </div><br></br>
            <input type="submit" value="Submit" className="btn btn-success" />
            </form>
        </div>
    )
}

export default Form;