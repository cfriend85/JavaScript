import {Component} from 'react';

class Car extends Component{
    render(){
        const style = {
            backgroundColor: this.props.color
        }
        return(
        <div class="card">
                <img class="card-img-top" src={this.props.picture} alt="Card image cap" />
                    <div class="card-body" style={style}>
                        <h4 class="card-title">"<i>{this.props.carName}</i>"</h4>
                        <p class="card-text">
                        <h4>Status: Ready for destruction!</h4>
                        </p>
                        <a href="#!" class="btn btn-lg btn-warning smash">Smash it!</a>
                    </div>
            <div>
        </div>
        </div>
        )
    }
}

export default Car