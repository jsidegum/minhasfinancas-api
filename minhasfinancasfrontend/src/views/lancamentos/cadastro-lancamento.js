import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import LancamentoService from '../../app/service/lancamentoService';
import LocalStorageService from '../../app/service/localstorageService';

import Card from '../../components/card';
import FormGroup from '../../components/form-group';
import SelectMenu from '../../components/selectMenu';

class CadastroLancamento extends Component {

    state = {
        id: null,
        descricao: '',
        ano: '',
        mes: '',
        valor: '',
        tipo: '',
        status: 'PENDENTE',
    }

    constructor() {
        super();
        this.service = new LancamentoService;
    }

    validar() {
        const msgs = [];

        if (!this.state.descricao) {
            msgs.push('Por favor entre com a descrição do lancamento.');
        }

        if (!this.state.ano) {
            msgs.push('Por favor entre com o ano do lancamento.');
        }
        if (!this.state.mes) {
            msgs.push('Por favor entre com o mês do lancamento.');
        }
        if (!this.state.valor) {
            msgs.push('Por favor entre com o valor do lancamento.');
        }
        if (!this.state.tipo) {
            msgs.push('Por favor entre com o tipo do lancamento.');
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
            const usuarioLogado = LocalStorageService.obterItem('_usuario_logado');
            const { descricao, ano, mes, valor, tipo, status } = this.state;
            const lancamento = {
                descricao,
                ano,
                mes,
                valor,
                tipo,
                status,
                usuario: usuarioLogado.id
            }
            this.service.salvar(lancamento)
                .then(response => {
                    alert('Lancamento cadastrado com sucesso!');
                    this.props.history.push('/lancamentos');
                }).catch(error => {
                    alert(error.response.data.message)
                })
        }
    }

    cancelar = () => {
        this.props.history.push('/lancamentos');
    }

    render() {

        const meses = this.service.obterListaMeses();
        const tipo = this.service.obterListaTipo();

        return (
            <Card title='Cadastro de Lançamento'>
                <div className="row">
                    <div className="col-md-12">
                        <FormGroup label="Descrição: *" htmlFor="inputDescricao">
                            <input
                                type="text"
                                value={this.state.descricao}
                                onChange={e => this.setState({ descricao: e.target.value })}
                                className="form-control"
                                id="inputDescricao"
                            />
                        </FormGroup>
                    </div >
                </div >

                <div className="row">
                    <div className="col-md-6" >
                        <FormGroup label="Ano: *" htmlFor="inputAno">
                            <input
                                type="text"
                                value={this.state.ano}
                                onChange={e => this.setState({ ano: e.target.value })}
                                className="form-control"
                                id="inputAno"
                            />
                        </FormGroup>
                    </div >

                    <div className="col-md-6" >
                        <FormGroup label="Mês: *" htmlFor="inputMes">
                            <SelectMenu
                                id="inputMes"
                                lista={meses}
                                value={this.state.mes}
                                onChange={e => this.setState({ mes: e.target.value })}
                            />
                        </FormGroup>
                    </div >
                </div >

                <div className="row">
                    <div className="col-md-4" >
                        <FormGroup label="Valor: *" htmlFor="inputValor">
                            <input
                                type="text"
                                value={this.state.valor}
                                onChange={e => this.setState({ valor: e.target.value })}
                                className="form-control"
                                id="inputValor"
                            />
                        </FormGroup>
                    </div >

                    <div className="col-md-4" >
                        <FormGroup label="Tipo de Lançamento: *" htmlFor="inputTipo">
                            <SelectMenu
                                id="inputTipo"
                                lista={tipo}
                                value={this.state.tipo}
                                onChange={e => this.setState({ tipo: e.target.value })}
                            />
                        </FormGroup>
                    </div >

                    <div className="col-md-4" >
                        <FormGroup label="Status: " htmlFor="inputStatus">
                            <input
                                type="text"
                                value={this.state.status}
                                className="form-control"
                                id="inputStatus"
                                disabled
                            />
                        </FormGroup>
                    </div >

                </div >

                <div className="row">
                    <div className="col-md-6">
                        <button
                            onClick={this.cadastrar}
                            className="btn btn-success"
                        >
                            Salvar
                        </button>
                        <button
                            onClick={this.cancelar}
                            className="btn btn-danger"
                        >
                            Cancelar
                        </button>
                    </div >
                </div >
            </Card >


        );
    }
}

export default withRouter(CadastroLancamento);