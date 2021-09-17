import React from "react";
import styled from "styled-components";


const ContainerProdutos = styled.div`
    display: flex;
    flex-direction: column;
`
const Header = styled.header`
    display: flex;
`

const AreaDosProdutos = styled.div`
    display: grid;
    grid-template-columns: 230px 230px 230px;
    gap: 15px;
`
const ContainerProduto = styled.div`
    display: flex ;
    flex-direction: column;
    /* border: 1px solid black; */
    align-items: center;
    padding-bottom: 10px;
`
const ImagemProdutos = styled.img`
    /* width: 250px; */
    padding-top: 15px;
`
const TextoProduto = styled.p`
margin-bottom: 10px;
`

export default class Produtos extends React.Component {
    state = {
        Produto: [
            {
            id: 1,
            nome: "Produto 1",
            preco: "R$ 90,00",
            imagem: "https://picsum.photos/200/200?a=1",
            },
            {
            id: 2,
            nome: "Produto 2",
            preco: "R$ 100,00",
            imagem: "https://picsum.photos/200/200?a=2",
            },
            {
            id: 3,
            nome: "Produto 3",
            preco: "R$ 120,00",
            imagem: "https://picsum.photos/200/200?a=3",
            },
            {
            id: 4,
            nome: "Produto 4",
            preco: "R$ 130,00",
            imagem: "https://picsum.photos/200/200?a=4",
            },
            {
            id: 5,
            nome: "Produto 5",
            preco: "R$ 140,00",
            imagem: "https://picsum.photos/200/200?a=5",
            },
        ]
        };

    render() {
        const componentes = this.state.Produto.map((item) => {
            return (
                <ContainerProduto key={item.id}>
                    <ImagemProdutos src={item.imagem} />
                    <TextoProduto>{item.nome}</TextoProduto>
                    ___
                    <TextoProduto>{item.preco}</TextoProduto>
                    <button>Adicionar ao Carrinho</button>
                </ContainerProduto>
            )
        })
    return (
        <ContainerProdutos>
            <Header>
                <p>Quantidade de Produtos: {this.state.Produto.length}</p>  
            </Header>
            <AreaDosProdutos>
                {componentes}
            </AreaDosProdutos>
        </ContainerProdutos>
    );
    }
} 