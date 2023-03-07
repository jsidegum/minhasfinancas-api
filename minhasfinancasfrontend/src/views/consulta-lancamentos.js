import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Card from '../components/card'
import FormGroup from '../components/form-group'
import SelectMenu from '../components/selectMenu';


class ConsultaLancamentos extends Component {

    state = {
        "descricao": '',
        "mes": null,
        "ano": null,
        "usuario": null,
        "tipo": ''
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
                <div className="row">
                    <div className="col-lg-6">
                        <div className="bs-component">
                            <Card title="Busca Lançamento">
                                <FormGroup label="Ano: *" htmlFor="inputAno">
                                    <input
                                        type="text"
                                        value={this.state.ano}
                                        onChange={e => this.setState({ ano: e.target.value })}
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        placeholder="Digite o Ano"
                                    />
                                </FormGroup>

                                <FormGroup label="Mês: *" htmlFor="inputMes">
                                    <SelectMenu id="inputMes" lista={meses} />
                                </FormGroup>

                                <FormGroup label="Tipo de Lançamento:" htmlFor="inputTipo">
                                    <SelectMenu id="inputMes" lista={tipo} />
                                </FormGroup>

                            </Card>

                        </div>

                    </div>

                </div>

            </>
        )

    }
}

export default withRouter(ConsultaLancamentos);