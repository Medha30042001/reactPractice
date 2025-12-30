import React, { useEffect, useState } from 'react'
import { getUsers } from '../api/userSevice'
import {Link} from 'react-router-dom'

const UserList = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(res => setUsers(res.data))
    }, [])

  return (
    <>
        <h2>Users</h2>
        {users.map(user => (
            <div key={user.id}><Link to={`/users/${user.id}`}>
                {user.name}</Link>
                <span>{user.username}</span>
            </div>
        ))}
    </>
  )
}

export default UserList