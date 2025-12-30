import React, { useEffect, useState } from 'react'
import {useParams, Link, Outlet} from 'react-router-dom'
import { getUsersById } from '../api/userSevice';

const UserDetails = () => {

    const {id} = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        getUsersById(id).then(res => setUser(res.data))
    }, [id]);

    if(!user) return <p>Loading...</p>

  return (
    <>
        <div>
            <h4>{user.name}</h4>
            <h4>{user.email}</h4>
            <h4>{user.address.city}</h4>

            <h3><Link to={`/users/${id}/posts`}>View Post</Link></h3>
            <hr />
            <Outlet />
        </div>
    </>
  )
}

export default UserDetails