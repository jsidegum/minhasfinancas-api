import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import LancamentoService from '../../app/service/lancamentoService';
import LocalStorageService from '../../app/service/localstorageService';
import Card from '../../components/card'
import FormGroup from '../../components/form-group'
import SelectMenu from '../../components/selectMenu';
import LancamentoTable from './lancamentoTable';


class ConsultaLancamentos extends Component {

    // http://localhost:8080/api/lancamentos?usuario=9&descricao=pagamen&mes=1&ano=2023
    state = {
        descricao: '',
        mes: '',
        ano: '',
        tipo: '',
        lancamentos: []
    }

    constructor() {
        super();
        this.service = new LancamentoService;
    }

    buscar = () => {

        const usuarioLogado = LocalStorageService.obterItem('_usuario_logado');

        const lancamentoFiltro = {
            usuario: usuarioLogado.id,
            descricao: this.state.descricao,
            mes: this.state.mes,
            ano: this.state.ano,
            tipo: this.state.tipo,
        }

        this.service.buscar(lancamentoFiltro)
            .then(response => {
                this.setState({ lancamentos: response.data })
            }).catch(error => {
                alert(error.response.data)
            })
    }

    render() {
        const meses = [
            { label: 'Selecione...', value: '' },
            { label: 'Janeiro', value: 1 },
            { label: 'Fevereiro', value: 2 },
            { label: 'Março', value: 3 },
            { label: 'Abril', value: 4 },
            { label: 'Maio', value: 5 },
            { label: 'Junho', value: 6 },
            { label: 'Julho', value: 7 },
            { label: 'Agosto', value: 8 },
            { label: 'Setembro', value: 9 },
            { label: 'Outubro', value: 10 },
            { label: 'Novembro', value: 11 },
            { label: 'Dezembro', value: 12 }
        ]

        const tipo = [
            { label: 'Selecione...', value: '' },
            { label: 'Receita', value: 'RECEITA' },
            { label: 'Despesa', value: 'DESPESA' }
        ]

        return (
            <>
                <Card title="Busca Lançamento">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="bs-component">

                                <FormGroup label="Descrição:" htmlFor="inputDescricao">
                                    <input
                                        type="text"
                                        value={this.state.descricao}
                                        onChange={e => this.setState({ descricao: e.target.value })}
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        placeholder="Digite a Descrição"
                                    />
                                </FormGroup>

                                <FormGroup label="Ano:" htmlFor="inputAno">
                                    <input
                                        type="text"
                                        value={this.state.ano}
                                        onChange={e => this.setState({ ano: e.target.value })}
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        placeholder="Digite o Ano"
                                    />
                                </FormGroup>

                                <FormGroup label="Mês:" htmlFor="inputMes">
                                    <SelectMenu
                                        id="inputMes"
                                        lista={meses}
                                        value={this.state.mes}
                                        onChange={e => this.setState({ mes: e.target.value })}
                                    />
                                </FormGroup>

                                <FormGroup label="Tipo de Lançamento:" htmlFor="inputTipo">
                                    <SelectMenu
                                        id="inputMes"
                                        lista={tipo}
                                        value={this.state.tipo}
                                        onChange={e => this.setState({ tipo: e.target.value })}
                                    />
                                </FormGroup>
                                <button onClick={this.buscar} type="button" className="btn btn-success" >Buscar</button>
                                <button type="button" className="btn btn-danger">Cadastrar</button>

                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="col-lg-12">

                            <div className="page-header">
                                <h1 id="tables"></h1>
                            </div>

                            <div className="bs-component">
                                <LancamentoTable lancamento={this.state.lancamentos} />
                            </div>
                        </div>
                    </div>


                </Card>
            </>
        )

    }
}

export default withRouter(ConsultaLancamentos);