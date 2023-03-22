import React, { Component } from 'react';

import { Route, Switch, HashRouter } from 'react-router-dom';

import Home from '../views/home';
import Login from '../views/login';
import CadastroUsuario from '../views/cadastroUsuarios';
import CadastroLancamento from '../views/lancamentos/cadastro-lancamento';
import ConsultaLancamentos from '../views/lancamentos/consulta-lancamentos';


class Rotas extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/cadastro-usuarios" component={CadastroUsuario} />
                    <Route path="/lancamentos" component={ConsultaLancamentos} />
                    <Route path="/cadastro-lancamento/:id" component={CadastroLancamento} />
                </Switch>
            </HashRouter >
        )
    }
}

export default Rotas;