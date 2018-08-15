import React from 'react';
import Styled from 'styled-components';

const Icon = Styled.img`
    width: 45px;
    border: 2px;
`;

const Ul = Styled.ul`
    list-style: none;
    background-color: #222222;
    width: 50px;
`

function Sidebar(props) {

    return(
        <Ul>
            <li><Icon src={require("../assets/Home.png")} alt="Home"/></li>
            <li><Icon src={require("../assets/Kata.png")} alt="Kata"/></li>
            <li><Icon src={require("../assets/Kumite.png")} alt="Kumite"/></li>
            <li><Icon src={require("../assets/Forum.png")} alt="Forum"/></li>
            <li><Icon src={require("../assets/Wiki.png")} alt="Wiki"/></li>
        </Ul>
    );

}

export default(Sidebar);