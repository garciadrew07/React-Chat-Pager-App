import React, { Component } from 'react';
 import './App.css';
import Header from './components/header';
import Chat from "./components/chat";
import 'bootstrap';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/login";
import { BrowserRouter, Route,} from 'react-router-dom'


export const App =()=>{
    return (
        <BrowserRouter>
            <React.Fragment>
                <Header/>

                <Route exact path="/" component={Login} />
                <Route path="/chat" component={Chat} />
            </React.Fragment>
        </BrowserRouter>
    )
}

export default App;