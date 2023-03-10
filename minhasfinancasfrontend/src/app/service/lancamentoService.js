import ApiService from "../apiservice";

class LancamentoService extends ApiService {

    constructor() {
        super('/api/lancamentos')
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