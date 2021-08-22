import React from 'react';
import leftArrow from '../static/images/left_arrow.svg'
import rightArrow from '../static/images/right_arrow.svg'
import forward from '../static/images/forward.svg'


const Step = (props) => {
    const direction = props.direction
    return(
    <div className="card">
        <img src={direction === "Right" ? rightArrow : direction === "Left" ? leftArrow : forward} className="left-arrow" alt="arrow"/>
    <div className="card-body">
        <p className="card-text">{direction} {props.text}</p>
        <a href="#" className="btn btn-danger">Stop Navigation</a>
    </div>
</div>
    )
}

export default Step;