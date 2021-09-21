import React from 'react';
import styled from 'styled-components';
import carrinho from '../img/outline_shopping_cart_black_24dp.png'
import account from '../img/outline_account_circle_black_24dp.png'







const Div = styled.div`
    background-color: #fff;
    border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
`;
const BarraHeader = styled.div`
    max-width: 1010px;
    padding: 26px 20px;
    width: 100%;
    display: flex;
    align-items: center;
    margin: 0 auto;
`;
const BarraEsquerda = styled.div`
    width: 33.333%;
    text-align: left;
`;
const BarraCentro = styled.div`
    width: 33.333%;
    text-align: center;
`;

const BarraDireita = styled.div`
    width: 33.333%;
    text-align: right;
    svg {
    margin-right: 20px;
    }
`;



function Header() {
    return (
        <Div>
        <BarraHeader>
            <BarraEsquerda>
                <h2> SkyStore </h2>
            </BarraEsquerda>
            <BarraCentro>       
            </BarraCentro>
            <BarraDireita>
                <img src = {account}/>
                <img src = {carrinho} />           
            </BarraDireita>
        </BarraHeader>
        </Div>
    );
};

export default Header;