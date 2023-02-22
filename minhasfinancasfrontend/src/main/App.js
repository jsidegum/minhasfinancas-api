import React from 'react';
import Navbar from '../components/navbar';
import '../custom.css';
import Rotas from './rotas';

class App extends React.Component {

  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          <Rotas />
        </div>
      </>
    )
  }
}

export default App;
