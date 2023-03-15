import React from "react";
import './Header.css';

export default function Header() {

    return (
        <header className="header">
                <a href="/" className="LetterC">C.</a>
                <nav className="navlinks">
                    <ul>
                        <li>
                            <a href="/" >Início</a>
                        </li>
                        <li>
                            <a href="/aboutMe">Sobre</a>
                        </li>
                        <li>
                            <a href="/contact">Contatos</a>
                        </li>
                        <li>
                            <a href="/client">Clientes</a>
                        </li>
                        <li>
                            <a href="/skill">Skills</a>
                        </li>
                        <li>
                            <a href="/service">Trabalhos</a>
                        </li>
                    </ul>
                </nav>
        </header>
    )
}