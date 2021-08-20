import React from 'react';

const Ingredient = (props) => {
    const breadStyle = {
        backgroundColor: "brown"
    }
    return(
        <div>
            {
            props.text === "Bread" ? <div style={breadStyle}><h1>{props.text}</h1></div> :
            <div><h1>{props.text}</h1></div>
            }
        </div>
    )
}

export default Ingredient;