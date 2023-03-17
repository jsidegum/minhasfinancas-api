import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import LancamentoService from '../../app/service/lancamentoService';

import Card from '../../components/card';
import FormGroup from '../../components/form-group';
import SelectMenu from '../../components/selectMenu';

class CadastroLancamento extends Component {

    constructor() {
        super();
        this.service = new LancamentoService;
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
                                // value={this.state.nome}
                                // onChange={e => this.setState({ nome: e.target.value })}
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
                                // value={this.state.email}
                                // onChange={e => this.setState({ email: e.target.value })}
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
                            // value={this.state.mes}
                            // onChange={e => this.setState({ mes: e.target.value })}
                            />
                        </FormGroup>
                    </div >
                </div >

                <div className="row">
                    <div className="col-md-4" >
                        <FormGroup label="Valor: *" htmlFor="inputValor">
                            <input
                                type="text"
                                // value={this.state.senha}
                                // onChange={e => this.setState({ senha: e.target.value })}
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
                            // value={this.state.tipo}
                            // onChange={e => this.setState({ tipo: e.target.value })}
                            />
                        </FormGroup>
                    </div >

                    <div className="col-md-4" >
                        <FormGroup label="Status: " htmlFor="inputStatus">
                            <input
                                type="text"
                                // value={this.state.senhaRepeticao}
                                // onChange={e => this.setState({ senhaRepeticao: e.target.value })}
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
                            // onClick={this.cadastrar}
                            className="btn btn-success"
                        >
                            Salvar
                        </button>
                        <button
                            // onClick={this.cancelar}
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