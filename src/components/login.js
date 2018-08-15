import React, { Component } from 'react'
import { LargeInput, Box } from '../styles';
import { Button, FormGroup, FormControl, ControllLabel } from "react-bootstrap";
import { Route } from 'react-router';
import Chat from "./chat";





export default class Login extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            email: '',
            password: '',
        };

    }

    canLogin = () => {
        return this.state.email !== "" && this.state.password.length >= 3
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit (e) {
        e.preventDefault();
        this.props.history.push("/chat");
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <LargeInput value={this.state.email} id="email" type="text" placeholder="email"  onChange={this.handleChange}/>
                <LargeInput value={this.state.password} id="password" type="password" name="password"  placeholder="password" onChange={this.handleChange}/>
                <Box disabled={!this.canLogin()} type="submit">Login</Box>
            </form>

        )
}
}






