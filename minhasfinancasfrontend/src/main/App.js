import React from 'react';
import '../custom.css';
import Rotas from './rotas';

// import Login from '../views/login';
// import CadastroUsuario from '../views/cadastroUsuarios';


class App extends React.Component {

  render() {
    return (
      <>
        {/* <Login /> */}
        {/* <CadastroUsuario /> */}
        <Rotas />
      </>
    )
  }
}


export default App;
