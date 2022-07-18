import React from 'react';
import './index.css';

export default function UserDetails(props) {

    const { user } = props

    return <>

        <div className="user-details">

            <div className="user-avatar">
                <img src={user.avatar_url} alt="User" className="user-img" />
            </div>

            <div className="user-info">
                <span className='name-info'> {user.name} </span>
                <span className='login-info'> {user.login} </span>
                <span className="bio-info"> {user.bio} </span>
                <a href={user.html_url} className="button-link" target="_blank">
                    Ver Perfil no Github
                </a>
                <div className="follow-info">
                    <img src="/imgs/follow.png" alt="follow" className="icon" />
                    <span> {user.following} Seguindo - {user.followers} Seguidores </span>
                </div>
                <div className="company-info">
                    <img src="/imgs/company.png" alt="company" className="icon" />
                    <span> {user.company} </span>
                </div>
                <div className="location-info">
                    <img src="/imgs/local.png" alt="location" className="icon" />
                    <span> {user.location} </span>
                </div>
            </div>

        </div>

    </>
}