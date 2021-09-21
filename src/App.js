import React from 'react';
<<<<<<< HEAD
import Header from './Components/header';

class App extends React.Component {
=======
import Header from './components/header';
import styled from 'styled-components';
import containerProdutos from './components/produtos';
import Produtos from './components/produtos';
import { FiltrosContainer, FiltrosInput } from "./style";
import Footer from './components/footer';

const produto = [
  {
    id: 1,
    name: 'Produto legal',
    price: 123,
    photo: 'https://picsum.photos/200/200?a=1'
  },
  {
    id: 2,
    name: 'Produto 2',
    price: 200,
    photo: 'https://picsum.photos/200/200?a=2'
  },
  {
    id: 3,
    name: 'Produto 3',
    price: 30,
    photo: 'https://picsum.photos/200/200?a=3'
  },
  {
    id: 4,
    name: 'Produto 4',
    price: 10,
    photo: 'https://picsum.photos/200/200?a=4'
  }
]
// class App extends React.Component {
//   state = {
//     produto: [{
//         id: Date.now(),
//         nome: "teste",
//         preco: "123",
//         foto:'https://picsum.photos/200/200'
//     },
//     {
//         id: 1,
//         nome: "outro teste",
//         preco: "456",
//         foto: ''
//     }
//     ]
// }

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




>>>>>>> b39c540f0072f7d0dc65120d52022740933a3049
  render() {
    return (
      <div>
        <Header/>
<<<<<<< HEAD
=======
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
        <Produtos />
        <Footer />
>>>>>>> b39c540f0072f7d0dc65120d52022740933a3049
      </div>
    );
  }
}


// function App() {
//   return (
//     <div>
//     </div>
//   );
// }

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> b39c540f0072f7d0dc65120d52022740933a3049
