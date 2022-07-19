import React from 'react';
import './index.css';
import { contacts, technologies } from '../../helpers/readme';

export default function ReadMe(props) {

    return <>

        <div className="read-me-content">

            <small> {props.user.login}/README.md </small>

            <img src="/imgs/mariogif.gif" className="mario-gif" alt="mario" />

            <h1> 👋 Olá! Me chamo @{props.user.login} </h1>

            <div className="line"></div>

            <h3> Tecnologias utilizadas </h3>
            {technologies.map((tech, index) => {
                return <img src={tech} key={index} className="badge" alt="tech" />

            })}

            <h3> Contatos </h3>
            {contacts.map((contact, index) => {
                return <a href={contact.url}  rel="noreferrer" target="_blank"> <img src={contact.badge} key={index} className="badge" alt="contact" /> </a>
            })}

        </div>

    </>
}