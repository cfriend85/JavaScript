import {Component} from 'react';

class Arena extends Component{
    render(){
        return(
            <div id="arena" class="d-flex justify-content-around flex-wrap">
                {this.props.children}
            </div>
            )
        }
}

export default Arena