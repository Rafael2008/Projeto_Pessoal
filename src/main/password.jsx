import React, { Component } from 'react'
import "../build/css/main.min.css"
import next from '../build/images/icon_arrow_right.svg'
import {browserHistory,withRouter} from 'react-router';
import { Redirect } from 'react-router-dom'
import Routes from './routes'



class Password extends React.Component {
 
    

render(){

    return(    
        <div className="row">
        <div className="col-md-7 bg-login">
            <h1>IngCorp</h1>
            <p>Otimizador de centros de atendimentos</p>
        </div>
        <div className="col-md-5">
            <div className="block no-round">
                <div className="block-content">
                    <form className="row justify-content-md-center">
                       <div className="col-md-10">
                    <div className="form-group">
                        <h2>Seja Bem-vindo!</h2>
                        <p>Entre com sua senha</p>
                    </div>
                    <div className="form-group">
                    <label>
                        <input ref="fieldSenha" type="password" name="password" id="password" placeholder="Senha"/>
                    </label>
                        <div className="invalid-feedback">Senha incorreta</div>
                    </div>
                    <div className="form-group flex space-between">
                        <a href="#" id="forgot-password" className="inline">Esqueci minha senha</a>
                         <button type="submit" name="btnlogin" id="btnlogin" className="btn btn-primary btn-hero btn-small pull-right">
                                Login<img src={next} width="8"/> </button>
                    </div>
                    <div className="form-group">
                        <a href="#" id="change-password" className="btn btn-outline-primary btn-block change-password">Alterar Senha</a>
                    </div>
                </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )}

                   
}

export default Password;