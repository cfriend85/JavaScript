import React from 'react';

const Colored = (props) => {

    const myStyle = {
        backgroundColor: props.color,
        color: props.text,
        marginTop: 250,
    }

    return(
        <div style={myStyle}>
            <h1>{isNaN(props.word) ? `The word is: ${props.word}` : {}}</h1>
        </div>
    )
}


export default Colored;