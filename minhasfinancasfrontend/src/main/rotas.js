import React, { Component } from 'react';

import { Route, Switch, HashRouter } from 'react-router-dom';

import CadastroUsuario from '../views/cadastroUsuarios';
import Login from '../views/login';


class Rotas extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/cadastro-usuarios" component={CadastroUsuario} />
                </Switch>
            </HashRouter >
        )
    }
}

export default Rotas;