import React from 'react';

const Form = (props) => {
    return(
        <div>
            <form onSubmit={props.onSubmitHandler}>
                <div className="form-group p-5 col-5 mx-auto">
                    <span className="alert-danger">{props.errors.title && props.errors.title.message}</span>
                    <input type="text" name="title" className="form-control" placeholder="Title" onChange={props.onChangeHandler} value={props.form.title}/><br></br>

                    <span className="alert-danger">{props.errors.image_url && props.errors.image_url.message}</span>
                    <input type="text" name="image_url" className="form-control" placeholder="Image Link" onChange={props.onChangeHandler} value={props.form.image_url}/><br></br>

                    <span className="alert-danger">{props.errors.director && props.errors.director.message}</span>
                    <input type="text" name="director" className="form-control" placeholder="Director" onChange={props.onChangeHandler} value={props.form.director}/><br></br>

                    <span className="alert-danger">{props.errors.genre && props.errors.genre.message}</span>
                    <input type="text" name="genre" className="form-control" placeholder="Genre" onChange={props.onChangeHandler} value={props.form.genre}/><br></br>

                    <span className="alert-danger">{props.errors.year && props.errors.year.message}</span>
                    <input type="number" name="year" className="form-control" placeholder="Year Released" onChange={props.onChangeHandler} value={props.form.year}/><br></br>

                    <label htmlFor="isMovie">Is this a Movie?</label>
                    <input type="checkbox" name="isMovie" className="form-check-input" onChange={props.onChangeHandler} checked={props.form.isMovie}/><br></br>

                    <input type="submit" value="Add!" className="btn btn-success btn-lg"/>
                </div>
            </form>
        </div>
    )
}

export default Form;