import React, { Component } from 'react'
import {HashRouter} from 'react-router-dom'
import Roteamento from './routes'



class Login extends Component {

    render(){

        return(
            <HashRouter>
                <div className='container'>
                    <Roteamento />
                    {this.props.children}
                </div>
            </HashRouter>
            
        )
    }
}
export default Login;
