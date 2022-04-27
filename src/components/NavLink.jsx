import React from 'react';

function NavLink(props) {
    
    if (props.simpleLink) {
        return <a href={props.href}>{props.children}</a>
    }

    return (
        <li>
            <a href={props.href}>{props.text}</a>
        </li>
    )
}

export default NavLink;