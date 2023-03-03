import React from 'react';
import Card from '../components/card'
import FormGroup from '../components/form-group'
import { withRouter } from 'react-router-dom'
import UsuarioService from '../app/service/usuarioService';

class CadastroUsuario extends React.Component {

    state = {
        nome: '',
        email: '',
        senha: '',
        senhaRepeticao: ''
    }

    constructor() {
        super();
        this.serviceSalvar = new UsuarioService();
    }

    validar() {
        const msgs = [];

        if (!this.state.nome) {
            msgs.push('Por favor entre com seu nome');
        }
        if (!this.state.email) {
            msgs.push('Por favor entre com seu email');
        } else if (!this.state.email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/)) {
            msgs.push('Por favor entre com um email válido');
        }
        if (!this.state.senha) {
            msgs.push('Por favor entre com sua senha');
        }
        if (this.state.senha !== this.state.senhaRepeticao) {
            msgs.push('As senhas não conferem');
        }
        if (msgs.length > 0) {
            alert(msgs.join('\n'));
            return false;
        } else {
            return true;
        }
    }

    cadastrar = () => {

        if (this.validar()) {

            const usuario = {
                nome: this.state.nome,
                email: this.state.email,
                senha: this.state.senha
            }


            this.serviceSalvar.salvar(usuario)
                .then(response => {
                    alert('Usuário cadastrado com sucesso!')
                    this.props.history.push('/login');
                }).catch(erro => {
                    alert(erro.response.data)
                })
        }
    }

    cancelar = () => {
        this.props.history.push('/login');
    }

    render() {
        return (

            <div className="row">
                <div className="col-md-6" style={{ position: 'relative', left: '300px' }}>
                    <div className="bs-docs-section"></div>
                    <div>
                        <Card title='Cadastro de Usuário'>
                            <FormGroup label="Nome: *" htmlFor="exampleInputEmail1">
                                <input
                                    type="text"
                                    value={this.state.nome}
                                    onChange={e => this.setState({ nome: e.target.value })}
                                    className="form-control"
                                    id="inputNome"
                                    placeholder="Digite o Nome"
                                />
                            </FormGroup>
                            <FormGroup label="Email: *" htmlFor="exampleInputEmail1">
                                <input
                                    type="email"
                                    value={this.state.email}
                                    onChange={e => this.setState({ email: e.target.value })}
                                    className="form-control"
                                    id="inputEmail"
                                    placeholder="Digite o Email"
                                />
                            </FormGroup>
                            <FormGroup label="Senha: *" htmlFor="inputSenha">
                                <input
                                    type="password"
                                    value={this.state.senha}
                                    onChange={e => this.setState({ senha: e.target.value })}
                                    className="form-control"
                                    id="inputSenha"
                                    placeholder="Password"
                                />
                            </FormGroup>
                            <FormGroup label="Repita a Senha: *" htmlFor="inputRepitaSenha">
                                <input
                                    type="password"
                                    value={this.state.senhaRepeticao}
                                    onChange={e => this.setState({ senhaRepeticao: e.target.value })}
                                    className="form-control"
                                    id="inputRespitaSenha"
                                    placeholder="Password"
                                />
                            </FormGroup>

                            <button onClick={this.cadastrar} className="btn btn-success">Salvar</button>
                            <button onClick={this.cancelar} className="btn btn-danger">Cancelar</button>

                        </Card>

                        <div className="form-group">
                        </div>

                    </div>
                </div>
            </div>


        );
    }
}

export default withRouter(CadastroUsuario);

