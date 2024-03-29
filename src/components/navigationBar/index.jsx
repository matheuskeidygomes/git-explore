import React, { useEffect, useState, useContext } from 'react';
import { BiBookBookmark } from 'react-icons/bi';
import { RiProfileLine } from 'react-icons/ri';
import { AiOutlineStar } from 'react-icons/ai';
import { UserContext } from '../../context/UserProvider';
import { Link } from 'react-router-dom';
import './index.css';

export default function NavigationBar() {

    const context = useContext(UserContext);
    const [markedPage, setMarkedPage] = useState("");
    const navigation = [
        { name: "Perfil", url: "/", icon: <RiProfileLine className="nav-icon" /> },
        { name: "Repositórios", url: "/repositories", icon: <BiBookBookmark className="nav-icon" /> },
        { name: "Favoritos", url: "/favorites", icon: <AiOutlineStar className="nav-icon" /> }
    ];

    useEffect(() => {
        let marked = navigation.find(item => item.url === window.location.pathname);
        if (marked) setMarkedPage(marked.name);
    }, []);

    return <>

        <div className="navigation-bar">
            {navigation.map((nav, index) => {
                return <div className="nav-button-container" key={index}>
                    <Link className="nav-button" to={nav.url} onClick={() => setMarkedPage(nav.name)}>
                        {nav.icon}
                        <span className="nav-span"> {nav.name} </span>
                        {nav.name !== "Perfil" &&
                            <span className="nav-span-circle">
                                {nav.name === "Repositórios" ? context.repositories.length : context.favorites.length}
                            </span>
                        }
                    </Link>
                    <div className={`${markedPage === nav.name ? "marked" : ""}`}></div>
                </div>
            })}
        </div>

    </>
}