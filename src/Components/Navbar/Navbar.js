import React from 'react';
import './styles.css';
const Navbar = () => {
    return (
        <nav class="nav flex-column align-items-center">
            <a class='nav-link'> <img src='https://cdn.betterttv.net/emote/5f9a8c436f583802e38a01a1/3x' alt='juliWow'/></a>
            <a class="nav-link h1" href="/">Sleepyruu</a>
            <a class="nav-link" href="/commissions">Form</a>
            <a class="nav-link" href="#">Work</a>
        </nav>
    )
}

export default Navbar
