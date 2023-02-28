import React from "react";
import './Header.css';

export default function Header() {

    return (
        <header className="header">
                <a href="/" className="LetterC">C.</a>
                <nav className="navlinks">
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/aboutMe">About Me</a>
                        </li>
                        <li>
                            <a href="/contact">Contacts</a>
                        </li>
                        <li>
                            <a href="/client">Clients</a>
                        </li>
                        <li>
                            <a href="/skill">Skills</a>
                        </li>
                        <li>
                            <a href="/service">Services</a>
                        </li>
                    </ul>
                </nav>
        </header>
    )
}