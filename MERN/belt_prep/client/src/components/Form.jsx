import React from 'react';

const Form = (props) => {
    return(
        <div>
            <form onSubmit={props.onSubmitHandler}>
                <div className="form-group p-5 col-5 mx-auto">
                    <input type="text" name="title" className="form-control" placeholder={props.form.title? props.form.title: "Title"} onChange={props.onChangeHandler}/><br></br>
                    <input type="text" name="image_url" className="form-control" placeholder={props.form.image_url? props.form.image_url: "Image Link"} onChange={props.onChangeHandler}/><br></br>
                    <input type="text" name="director" className="form-control" placeholder={props.form.director? props.form.director: "Director"} onChange={props.onChangeHandler}/><br></br>
                    <input type="text" name="genre" className="form-control" placeholder={props.form.genre? props.form.genre: "Genre"} onChange={props.onChangeHandler}/><br></br>
                    <input type="number" name="year" className="form-control" placeholder={props.form.year? props.form.year: "Year Released"} onChange={props.onChangeHandler}/><br></br>
                    <label htmlFor="isMovie">Is this a Movie?</label>
                    <input type="checkbox" name="isMovie" className="form-check-input" placeholder={props.form.isMovie? props.form.isMovie: {}} onChange={props.onChangeHandler}/><br></br>
                    <input type="submit" value="Add!" className="btn btn-success btn-lg"/>
                </div>
            </form>
        </div>
    )
}

export default Form;