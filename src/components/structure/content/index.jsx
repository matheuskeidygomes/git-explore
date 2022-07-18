import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../../context/UserProvider';
import { BiBookBookmark } from 'react-icons/bi';
import { RiProfileLine } from 'react-icons/ri';
import { AiOutlineStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import UserDetails from '../../userDetails';
import './index.css';

export default function Content(props) {

  const context = useContext(UserContext);
  const [user, setUser] = useState({});
  const [markedPage, setMarkedPage] = useState("");
  const navigation = [
    { name: "Perfil", url: "/", icon: <RiProfileLine className="nav-icon" /> },
    { name: "Repositórios", url: "/repositories", icon: <BiBookBookmark className="nav-icon" /> },
    { name: "Favoritos", url: "/favorites", icon: <AiOutlineStar className="nav-icon" /> }
  ]

  useEffect(() => {
    setUser(context.user);
  }, [context.user]);

  return <>

    <div className="content">

      <div className="content-container">

        <div className="user-column">
          <UserDetails user={user} />
        </div>

        <div className="content-column">

          <div className="navigation-bar">
            {navigation.map((nav, index) => {
              return <div className="nav-button-container" key={index}>
                <Link className="nav-button" to={nav.url} onClick={() => setMarkedPage(nav.name)}>
                  {nav.icon}
                  <span className="nav-span"> {nav.name} </span>
                </Link>
                <div className={`${markedPage === nav.name ? "marked" : ""}`}></div>
              </div>
            })}
          </div>

          {props.children}

        </div>

      </div>

    </div>

  </>
}


