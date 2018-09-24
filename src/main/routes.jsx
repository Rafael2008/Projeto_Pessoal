import React, { Component } from 'react'
import { Router, Route} from 'react-router'

import Email from './email'
import Password from './password'
import Login from './app'


class Roteamento extends Component {

    render(){
        return(
            <Router>
                <Route exact path="/" component={Login}/>
                <Route path='email' component={Email}/>
                <Route path='password' component={Password}/>
                <Redirect from='*' to='/' />
            </Router>
        )}
    
}


export default Roteamento;

