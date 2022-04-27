import React from 'react';
import NavLink from './NavLink';

function Nav() {
    return (
    <nav>
        <ul>
            <NavLink href="/" text="Home"></NavLink>
            <NavLink href="/about" text="About"></NavLink>
            <NavLink href="https://www.google.com" text="Google"></NavLink>
        </ul>
    </nav>
    )
}

export default Nav;