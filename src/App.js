import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import containerProdutos from './components/produtos';
import Produtos from './components/produtos';

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
class App extends React.Component {
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
  render(){
    return (
      <div>
        <Produtos />
    </div>
    );
  }
}

export default App;
