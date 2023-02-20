import React from 'react';

class App extends React.Component {

  state = {
    num1: null,
    num2: null,
    resultado: null
  }

  somar = () => { this.setState({ resultado: parseFloat(this.state.num1) + parseFloat(this.state.num2) }) };

  render() {
    return (
      <div>

        <div>
          <div>
            <label>Numero 1:</label>
            <input type="number" value={this.state.num1} onChange={(e) => this.setState({ num1: e.target.value })} />
          </div>

          <div>
            <label>Numero 2:</label>
            <input type="number" value={this.state.num2} onChange={(e) => this.setState({ num2: e.target.value })} />
          </div>

          <button
            onClick={this.somar}
          >
            SOMAR
          </button>

          <h1>
            {this.state.resultado}
          </h1>

        </div>

      </div>
    )
  }
}

export default App;
