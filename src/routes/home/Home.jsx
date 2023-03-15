import React from "react";
import './Home.css';
import { SlSocialInstagram, SlSocialLinkedin, SlSocialGoogle, SlSocialGithub } from 'react-icons/sl';
import { BsWhatsapp } from 'react-icons/bs';
import { SiJavascript, SiHtml5, SiCss3, SiReact, SiGithub } from 'react-icons/si';

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
                    <h1>Olá, Meu nome é Cristhian Cezar!</h1>
                </div>
                <div className="hardSkills">
                    <div>
                        <SiHtml5 color="orange" />
                    </div>
                    <div>
                        <SiCss3 color="blue" />
                    </div>
                    <div>
                        <SiJavascript color="yellow" />
                    </div>
                    <div>
                        <SiReact color="blue" />
                    </div>
                    <div>
                        <SiGithub color="white" />
                    </div>                   
                </div>
            </div>
        </div>
    )
}