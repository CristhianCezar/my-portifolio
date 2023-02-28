import React from "react";
import './Home.css';
import { SlSocialInstagram, SlSocialLinkedin, SlSocialGoogle, SlSocialGithub } from 'react-icons/sl';
import { BsWhatsapp } from 'react-icons/bs';

export default function Main() {
    return (
        <div className="main">
            <div className="imgMain">
                <div className="socialMedia">
                    <ul>
                        <li>
                            <a href="#instagram">
                                <SlSocialInstagram />
                            </a>
                        </li>
                        <li>
                            <a href="#linkedin">
                                <SlSocialLinkedin />
                            </a>
                        </li>
                        <li>
                            <a href="#gmail">
                                <SlSocialGoogle />
                            </a>
                        </li>
                        <li>
                            <a href="#github">
                                <SlSocialGithub />
                            </a>
                        </li>
                        <li>
                            <a href="#whatsapp">
                                <BsWhatsapp />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="myName">
                    <h1 className="" id="nameAnimation">Olá, Meu nome é Cristhian Cezar!</h1>
                </div>
            </div>
        </div>
    )
}