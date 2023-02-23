import React, { Component } from 'react';

import { Route, Switch, HashRouter } from 'react-router-dom';

import CadastroUsuario from '../views/cadastroUsuarios';
import Home from '../views/home';
import Login from '../views/login';


class Rotas extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/cadastro-usuarios" component={CadastroUsuario} />
                </Switch>
            </HashRouter >
        )
    }
}

export default Rotas;