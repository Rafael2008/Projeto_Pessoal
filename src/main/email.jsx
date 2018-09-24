import React, { Component } from 'react'
import "../build/css/main.min.css"
import next from '../build/images/icon_arrow_right.svg'



class Email extends Component {
 

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
                    <form ref="FormEmail" className="row justify-content-md-center">
                        <div className="col-md-10">
                            <div className="form-group">
                                <h2>Seja Bem-vindo!</h2>
                                <p>Entre com seu login de acesso</p>
                            </div>
                            <div className="form-group">
                            <label>
                                <input ref="fieldLogin" type="text" name="email" id="email" placeholder="E-mail de acesso"/>
                            </label>
                                <div id="msg_erro" className="invalid-feedback"></div>
                            </div>
                            <div className="form-group">
                                <button type="submit" name="btnlogin" id="btnlogin" className="btn btn-primary btn-hero btn-small pull-right">
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