import React, {useContext, useEffect, useState} from 'react';
import ReadMe from '../../components/readMe';
import { UserContext } from '../../context/UserProvider';

export default function Profile(props) {

    const context = useContext(UserContext);

    return <>

    <div className="profile-content">
        <ReadMe user={context.user} />
    </div>
    
    </>

} 