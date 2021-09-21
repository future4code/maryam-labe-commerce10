import React from 'react';
import styled from 'styled-components';
import carrinho from '../img/twotone_shopping_cart_white_24dp.png'
import account from '../img/twotone_account_circle_white_24dp.png'
import terra from '../img/Imagens-do-planeta-Terra-em-alta-resolução-6.jpg'






const Div = styled.div`
    background-color: #17073D;
    border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
    
`;
const BarraHeader = styled.div`
    max-width: 1010px;
    padding: 5px 15px;
    width: 100%;
    display: flex;
    align-items: center;
    margin: 0 auto;
    color: white;
`;
const BarraEsquerda = styled.div`
    width: 33.333%;
    text-align: left;
    margin-right: 200px; 
`;
const BarraCentro = styled.div`
    width: 33.333%;
    text-align: center;
`;

const BarraDireita = styled.div`
    width: 33.333%;
    text-align: right;
    display: flex;
    justify-content: space-around;
    margin-left: 250px;    
`;



function Header() {
    return (
        <Div>
        <BarraHeader>
            <BarraEsquerda>
                <h2> SpaceStore </h2>
            </BarraEsquerda>
            <BarraCentro> 
                <img src = {terra}/>      
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