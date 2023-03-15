import React from "react";
import './AboutMe.css';
import { GiOpenBook } from 'react-icons/gi';
import { FaGuitar } from 'react-icons/fa'
import { MdSchool } from 'react-icons/md';
import CareerPro from '../../img/CareerPro.png'
import MyPhoto from '../../img/MyPhoto.jpg'

export default function AboutMe() {
      
    const handleClick = event => {
        const containsClassActive = event.currentTarget.classList.contains('active');
        const isActive = document.querySelector('.active');
        const noDescription = document.querySelector('.noDescription');  
        
        if(!containsClassActive) {
            isActive.classList.remove('active');
            event.currentTarget.classList.add('active');
            noDescription.classList.remove('noDescription');
        } 
    }

    return (
        <div className="aboutMe">
            <div class="options">
                <div className="option active" id="person" onClick={handleClick}> 
                    <div className="description">
                        <div className="imgDescription">
                            <img src={MyPhoto} alt="" />
                        </div>
                        <div className="textDescription">
                            <p>
                                Me chamo Cristhian, Tenho 25 anos e moro em Belém-PA.
                                Ainda no ensino médio, tive o primeiro contato com o mundo do desenvolvimento
                                através de um amigo que fazia curso Técnico em Informática.
                                Ele me ensinou como fazer aquele bom e velho Hello, World com a linguagem C
                                E foi nesse momento que descobri qual área eu iria seguir.
                            </p>
                        </div>
                    </div>
                    <div className="label">
                        <div className="icon">
                            <i className="iconInside">
                                <GiOpenBook />
                            </i>
                        </div>
                        <div className="info">
                            <div className="titleMain">História</div>
                            <div className="sub">Minha Hisória Pessoal.</div>
                        </div>
                    </div>
                </div>
                <div class="option" id="work" onClick={handleClick}>
                <div className="description noDescription">
                        <div className="imgDescription">
                            <img src={MyPhoto} alt="" />
                        </div>
                        <div className="textDescription">
                            <p>
                                Em 2019 fiu contrato na Norte Telecom, Empresa no ramo
                                de Telecomunicações, onde passei 3 anos atuando como Backoffice.
                                em 2022 recebi a proposta para fazer parte da Stormtech, 
                                empresa que atua no ramo de eletrônicos.
                                E lá pude colocar em prática as minhas habilidades 
                                como front end, através de alguns aplicativos e sites que eu fiz para a empresa.
                            </p>
                        </div>
                    </div>
                    <div class="label">
                        <div class="icon">
                            <img src={CareerPro} alt="Imagem do um boneco subindo correndo uma escada com uma maleta na mao" />
                        </div>
             
                        <div class="info">
                            <div class="main">História Profissional</div>
                            <div class="sub">Minha História Profissional.</div>
                        </div>
                    </div>
                </div>
                <div class="option" id="academy" onClick={handleClick}>
                <div className="description noDescription">
                        <div className="imgDescription">
                            <img src={MyPhoto} alt="" />
                        </div>
                        <div className="textDescription">
                            <p>
                                Em 2021 fiz minha inscrição no curso de Análise e Desenvolvimento de Sistemas
                                na UNIASSELVI. E paralelo a faculdade eu fiz alguns cursos relacionados 
                                ao fron-end como: HTML, Javascript, CSS, Lógica de Programação, ReactJS e alguns mais.
                            </p>
                        </div>
                    </div>
                    <div class="label">
                        <div class="icon">
                            <i class="iconInside">
                                <MdSchool />
                            </i>
                        </div>
                        <div class="info">
                            <div class="main">História Acadêmica</div>
                            <div class="sub">Minha História Acadêmida.</div>
                        </div>
                    </div>
                </div>
                <div class="option" id="hobbie" onClick={handleClick}>
                <div className="description noDescription">
                        <div className="imgDescription">
                            <img src={MyPhoto} alt="" />
                        </div>
                        <div className="textDescription">
                            <p>
                                Eu sou apaixonado por Música, gosto de tocar guitarra, violão, baixo
                                e as vezes me arrisco no pandeiro.
                                Gosto de Gamer, Jogos como Chrono Trigger, Castlevania, 
                                Dragon Quest, Fire Emblem e muito mais.  
                            </p>
                        </div>
                    </div>
                    <div class="label">
                        <div class="icon">
                            <i class="iconInside">
                                <FaGuitar />
                            </i>
                        </div>
                        <div class="info">
                            <div class="main">Hobbies</div>
                            <div class="sub">Meus Hobbies</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}