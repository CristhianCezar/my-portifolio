import React from "react";
import './Header.css';
import Link from "../link/Link";

export default function Header() {
    return (
        <header className="header">
                <a href="/" className="LetterC">C</a>
                <nav className="navlinks">
                    <ul>
                        <li>
                            <Link title="About me"/>
                        </li>
                        <li>
                            <Link title="Contact"/>
                        </li>
                        <li>
                            <Link title="Clients"/>
                        </li>
                        <li>
                            <Link title="Skills"/>
                        </li>
                        <li>
                            <Link title="Services"/>
                        </li>
                    </ul>
                </nav>
        </header>
    )
}