import React from 'react';
import 'bootstrap';
import '../App.css';


export default class EnterChat extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            username : ''
        }
    }

    changeUsername(e){
        e.preventDefault();
        if(this.state.username.length){
            this.props.setUsername(this.state.username);
        }else{
            alert('Please provide a username');
        }
    }

    onChange(e){
        this.setState({
            username : e.target.value
        })
    }

    render(){
        return(
            <div className="enter-chat d-flex justify-content-center align-items-center">
                <form onSubmit={this.changeUsername.bind(this)}>
                    <React.Fragment>
                        <div>
                            <input
                                placeholder="Username"
                                value={this.state.username}
                                onChange={this.onChange.bind(this)}
                            />
                            <div>
                                <button
                                    type="submit">
                                    Join
                                </button>
                            </div>
                        </div>
                    </React.Fragment>
                </form>
            </div>
        )
    }
}

