import ApiService from "../apiservice";

class LancamentoService extends ApiService {

    constructor() {
        super('/api/lancamentos')
    }

    obterListaMeses() {
        return [
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
    }

    obterListaTipo() {
        return [
            { label: 'Selecione...', value: '' },
            { label: 'Receita', value: 'RECEITA' },
            { label: 'Despesa', value: 'DESPESA' }
        ]
    }


    buscar(lancamentoFiltro) {
        //http://localhost:8080/api/lancamentos?usuario=9&descricao=pagamen&mes=1&ano=2023

        let params = `?usuario=${lancamentoFiltro.usuario}`;

        if (lancamentoFiltro.descricao) {
            params += `&descricao=${lancamentoFiltro.descricao}`;
        }

        if (lancamentoFiltro.ano) {
            params += `&ano=${lancamentoFiltro.ano}`;
        }

        if (lancamentoFiltro.mes) {
            params += `&mes=${lancamentoFiltro.mes}`;
        }
        if (lancamentoFiltro.tipo) {
            params += `&tipo=${lancamentoFiltro.tipo}`;
        }

        return this.get(params);

    }

}

export default LancamentoService;