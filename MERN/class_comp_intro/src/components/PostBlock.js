import React, {Component} from 'react';

class PostBlock extends Component{
    render(){
        return(
    <>
        <div className="border p-5 m-5">
            <h3>Posted by: {this.props.fName}</h3>
            <h1>"{this.props.text}"</h1>
            <p>Likes: {this.props.likes} RT: {this.props.rt}</p>
        </div>
    </>
        )
    }
}

export default PostBlock;