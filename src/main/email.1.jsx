import React, { Component } from 'react'
import { render } from 'react-dom'
//import { Router, Route, IndexRoute, Link, useRouterHistory, Redirect} from 'react-router'
import {Router,Route,Link,Redirect,withRouter} from "react-router-dom";

import "../build/css/main.min.css"
import next from '../build/images/icon_arrow_right.svg'
import Routes from './routes'
import Password from './password'

var PropTypes = require('prop-types');
var existeLogin = false;



class Email extends Component {
 
    
    constructor(props) {
        super(props);
        this.state = {value: '',result: {}};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        console.log("PROPS=="+this.props.value);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value,redirect: true});
      }
     
    
      
      handleSubmit(event) {
        var oDivAlerta   = document.getElementById("msg_erro");
        var sMensagem = "";
    
        event.preventDefault();
        
        if(this.state.value){
            console.log("AUTENTICADO");
            this.refs.FormEmail.submit();
            existeLogin=true;
            //this.props.history.push("/password");
            //this.setState({ state: Password });
            //this.props.history.push('/password');
            //this.setState(() => { this.props.history.push(prevLocation || "/password")});

            oDivAlerta.style.display = '';
            oDivAlerta.innerHTML     = '';
        }else{
            console.log("NÃO AUTENTICADO");
            oDivAlerta.style.display = "block";
            oDivAlerta.innerHTML     = 'Digite um login válido';
        }
      } 

     

render(){
    if (existeLogin === true) {
        console.log("estou sendo redirecionado");
        return <Redirect to={Password} />;
    }

    return(    
    <div className="row">
        <div className="col-md-7 bg-login">
            <h1>IngCorp</h1>
            <p>Otimizador de centros de atendimentos</p>
        </div>
        <div className="col-md-5">
            <div className="block no-round">
                <div className="block-content">
                    <form action='/password' ref="FormEmail" onSubmit={this.handleSubmit} className="row justify-content-md-center">
                        <div className="col-md-10">
                            <div className="form-group">
                                <h2>Seja Bem-vindo!</h2>
                                <p>Entre com seu login de acesso</p>
                            </div>
                            <div className="form-group">
                            <label>
                                <input ref="fieldLogin" value={this.state.value} onChange={this.handleChange} type="text" name="email" id="email" placeholder="E-mail de acesso"/>
                            </label>
                                <div id="msg_erro" className="invalid-feedback"></div>
                            </div>
                            <div className="form-group">
                                <button type="submit" onClick={this.handleClick}  name="btnlogin" id="btnlogin" className="btn btn-primary btn-hero btn-small pull-right">
                                Próximo{this.props.name}<img src={next} width="8"/></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        {this.props.children}
    </div>
    )}

                   
}



export default Email;