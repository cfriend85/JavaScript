import React from 'react';


const Box = (props) => {

    const myStyle = {
        backgroundColor: props.text,
        height: 100,
        width: 250,
    }
    
    return(
    <div>
        <div className="m-2" style={myStyle}></div>
    </div>
        
    )
}


export default Box;