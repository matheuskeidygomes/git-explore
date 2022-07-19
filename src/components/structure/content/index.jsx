import React from 'react';      
import UserDetails from '../../userDetails';
import NavigationBar from '../../navigationBar';
import './index.css';

export default function Content(props) {

  return <>

    <div className="content">

      <div className="content-container">

        <div className="user-column">
          <UserDetails/>
        </div>

        <div className="content-column">
          <NavigationBar />
          {props.children}
        </div>

      </div>

    </div>

  </>
}


