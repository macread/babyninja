import React from 'react';
import Styled from 'styled-components';

const Icon = Styled.img`
    width: 45px;
    border: 2px;
`;

const Ul = Styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    list-style: none;
    width: 50px;
`

function Sidebar(props) {

    return(
        <Ul>
            <li><Icon src={require("../assets/Bookmark.png")} alt="Bookmark Icon"/></li>
            <li><Icon src={require("../assets/Notification.png")} alt="Notifcation Icon"/></li>
            <li>Avatar</li>
            <li>Rank</li>
            <li>{props.honor}</li>
        </Ul>
    );

}

export default(Sidebar);