import React, {useContext, useEffect, useState} from 'react';
import ReadMe from '../../components/readMe';
import { UserContext } from '../../context/UserProvider';

export default function Profile(props) {

    const context = useContext(UserContext);
    const [user, setUser] = useState([]);

    useEffect(() => {
        setUser(context.user);
    }, [context.user]);

    return <>

    <div className="profile-content">
        <ReadMe user={user} />
    </div>
    
    </>

} 