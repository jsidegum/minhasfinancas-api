import React, { Component } from "react";

class LancamentoTable extends Component {

    render() {

        const rows = this.props.lancamento.map(lanc => {
            return (
                <tr key={lanc.id}>
                    <td>{lanc.descricao}</td>
                    <td>{lanc.valor}</td>
                    <td>{lanc.tipo}</td>
                    <td>{lanc.ano}</td>
                    <td>{lanc.mes}</td>
                    <td>{lanc.status}</td>
                    <td>
                        <button type="button" className="btn btn-primary">Editar</button>
                        <button type="button" className="btn btn-danger">Deletar</button>
                    </td>

                </tr>
            )
        })

        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Descrição</th>
                        <th scope="col">Valor</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Ano</th>
                        <th scope="col">Mês</th>
                        <th scope="col">Situação</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        )
    }

}

export default LancamentoTable