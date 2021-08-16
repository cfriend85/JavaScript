import React, {Component} from 'react';

class PostBlock extends Component{
    render(){
        return(
    <>
        <div className="border p-5 m-5">
            <h1>{this.props.lName}, {this.props.fName}</h1>
            <h5>Age {this.props.age}</h5>
            <h5>Hair Color: {this.props.hair}</h5>
        </div>
    </>
        )
    }
}

export default PostBlock;