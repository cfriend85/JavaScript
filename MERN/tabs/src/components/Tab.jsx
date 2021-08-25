import React from 'react';

const Tab = (props) => {
    
    const myStyle = {
        backgroundColor: "black",
        color: "white"
    }

    return(
    <>
        <div onClick={() => props.onClickHandler(props.index)} className="border m-4 p-3" style={props.selected ? myStyle : {}}>
            <h1>{props.label}</h1>
        </div>
    </>
    )
}

export default Tab;