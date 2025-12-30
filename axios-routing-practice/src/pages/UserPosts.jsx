import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { getPostsByUser } from '../api/postService';

const UserPosts = () => {

    const {id} = useParams();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPostsByUser(id).then(res => setPosts(res.data));
    })

  return (
    <>
        <h3>User Posts</h3>

        {posts.map(post => (
            <p key={post.id}>{post.title}</p>
        ))}
    </>
  )
}

export default UserPosts