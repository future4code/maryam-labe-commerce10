import React from 'react';
import styled from "styled-components";

const ContainerFooter = styled.footer`
        border: 1px solid black;
        position: absolute;
        bottom: 0px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
`

const Icones = styled.img`
        width: 40px;
        margin: 2px;
`

function Footer() {
        return (
                <ContainerFooter>
                        <p>Nos siga nas redes sociais!</p>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><Icones class="icone"
                                src="https://image.flaticon.com/icons/png/512/124/124021.png" alt="ícone twitter"/></a>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><Icones class="icone"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/768px-Facebook_icon_2013.svg.png"
                                alt="ícone facebook"/></a>
                        <a href="http://instasgram.com/" target="_blank" rel="noopener noreferrer"><Icones class="icone"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png"
                                alt="ícone instagram"/></a>
                </ContainerFooter>
        );
}


export default Footer;