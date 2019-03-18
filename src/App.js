import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cor: "white",
      contador: 0
    };
  }

  trocarCor = e => {
    let contador = this.state.contador;
    let cor = ++contador % 2 == 0 ? "red" : "blue";
    this.setState({
      cor: cor,
      contador: contador
    });
  };

  render() {
    const estilo = {
      padding: 10,
      background: this.state.cor
    };
    return (
      <div>
        <h1 style={estilo} onClick={this.trocarCor}>
          {this.props.texto}
        </h1>
        <h2> Contador {this.state.contador} </h2>
      </div>
    );
  }
}

export default App;
