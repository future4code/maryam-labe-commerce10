import React from 'react';
import { FiltrosContainer, FiltrosInput } from "./style";
import Footer from './components/footer';

class App extends React.Component {

  state = {
    query: "",
    precoMin: "",
    precoMax: ""
  }

  atualizacaoQuery = (event) => {
    this.setState({
      query: event.target.value
    })
  }

  atualizacaoPrecoMin = (event) => {
    this.setState({
      precoMin: event.target.value
    })
  }

  atualizacaoPrecoMax = (event) => {
    this.setState({
      precoMax: event.target.value
    })
  }

  render() {
    return (
      <div>
        <FiltrosContainer>
          <label>Pesquisa: </label>
          <FiltrosInput
            placeholder="Pesquisa"
            value={this.state.query}
            onChange={this.atualizacaoQuery}
          />

          <label>Preço minimo: </label>
          <FiltrosInput
            type="number"
            placeholder="Preço mínimo"
            value={this.state.precoMin}
            onChange={this.atualizacaoPrecoMin}
          />

          <label>Preço máximo: </label>
          <FiltrosInput
            type="number"
            placeholder="Preço máximo"
            value={this.state.precoMax}
            onChange={this.atualizacaoPrecoMax}
          />
        </FiltrosContainer>

        <Footer />
      </div>  
    );
  }
}

export default App