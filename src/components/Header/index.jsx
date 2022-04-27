import React from 'react';
import Nav from '../Nav';
import Avatar from '../Avatar/';
import NavLink from '../NavLink';

function Header(props) {
    const user = {
        name: 'oleg',
        image: 'https://www.hueconstruction.co.uk/wp-content/uploads/2016/04/Picture-of-person.png'
    }
    return(
    <header>
        <h1>{props.text}</h1>
        <Nav/>

        <NavLink simpleLink={true}>
            <Avatar src={user.image} alt={user.name}/>
        </NavLink>
    </header>
    )
}

export default Header;