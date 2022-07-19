import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../context/UserProvider';
import './index.css';

export default function UserDetails() {

    const context = useContext(UserContext);
    const loading = context.loading;
    const [user, setUser] = useState({});

    useEffect(() => {
        setUser(context.user);
    }, [context.user]);

    function loadingComponent(option) {
        return <div className={`loading-${option}`}></div>
    }

    return <>

        <div className="user-details">

            <div className="user-avatar">
                {loading ? <>
                    {loadingComponent("avatar")}
                </> : <>
                    <img src={user.avatar_url} alt="User" className="user-img" />
                </>}
            </div>

            <div className="user-info">
                <span className='name-info'> {loading ? loadingComponent("span") : user.name} </span>
                <span className='login-info'> {loading ? loadingComponent("span") : user.login} </span>
                <span className="bio-info"> {loading ? loadingComponent("span") : user.bio} </span>
                <a href={user.html_url} rel="noreferrer" className="button-link" target="_blank">
                    Ver Perfil no Github
                </a>
                <div className="follow-info">
                    <img src="/imgs/follow.png" alt="follow" className="icon" />
                    <span className="follow-spans">
                        {loading ? loadingComponent("span-small") : user.following} Seguindo -
                        {loading ? loadingComponent("span-small") : user.followers} Seguidores
                    </span>
                </div>
                <div className="company-info">
                    <img src="/imgs/company.png" alt="company" className="icon" />
                    <span> {loading ? loadingComponent("span") : user.company} </span>
                </div>
                <div className="location-info">
                    <img src="/imgs/local.png" alt="location" className="icon" />
                    <span> {loading ? loadingComponent("span") : user.location} </span>
                </div>
            </div>

        </div>

    </>
}