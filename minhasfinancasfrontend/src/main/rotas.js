import React, { Component } from 'react';

import { Route, Switch, HashRouter } from 'react-router-dom';

import CadastroUsuario from '../views/cadastroUsuarios';
import Home from '../views/home';
import ConsultaLancamentos from '../views/lancamentos/consulta-lancamentos';
import Login from '../views/login';


class Rotas extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/cadastro-usuarios" component={CadastroUsuario} />
                    <Route path="/lancamentos" component={ConsultaLancamentos} />
                </Switch>
            </HashRouter >
        )
    }
}

export default Rotas;