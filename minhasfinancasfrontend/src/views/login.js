import React, { Component } from 'react'
import Card from '../components/card'
import FormGroup from '../components/form-group'
import { withRouter } from 'react-router-dom'
import axios from 'axios';

class Login extends Component {

    state = {
        email: '',
        senha: ''
    }

    entrar = () => {
        if (this.state.email === '' || this.state.senha === '') {
            alert('Por favor entre com seu email e senha')
        } else {
            // console.log('Email ' + this.state.email)
            // console.log('Senha ' + this.state.senha)
            axios
                .post('http://localhost:8080/api/usuarios/autenticar',
                    {
                        email: this.state.email,
                        senha: this.state.senha
                    }).then(response => {
                        console.log(response)
                    }).catch(erro => {
                        console.log(erro.response)
                    })
        }
    }

    prepareCadastrar = () => {
        this.props.history.push('/cadastro-usuarios')
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6" style={{ position: 'relative', left: '300px' }}>
                    <div className="bs-docs-section">

                        <Card title="Login">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="bs-component">
                                        <fieldset>
                                            <FormGroup label="Email: *" htmlFor="exampleInputEmail1">
                                                <input
                                                    type="email"
                                                    value={this.state.email}
                                                    onChange={e => this.setState({ email: e.target.value })}
                                                    className="form-control"
                                                    id="exampleInputEmail1"
                                                    aria-describedby="emailHelp"
                                                    placeholder="Digite o Email"
                                                />
                                            </FormGroup>

                                            <FormGroup label="Senha: *" htmlFor="exampleInputPassword1">
                                                <input
                                                    type="password"
                                                    value={this.state.senha}
                                                    onChange={e => this.setState({ senha: e.target.value })}
                                                    className="form-control"
                                                    id="exampleInputPassword1"
                                                    placeholder="Password" />
                                            </FormGroup>

                                            <button onClick={this.entrar} className="btn btn-success">Entrar</button>
                                            <button onClick={this.prepareCadastrar} className="btn btn-danger">Cadastrar</button>

                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div >
            </div >
        )
    }
}

export default withRouter(Login)