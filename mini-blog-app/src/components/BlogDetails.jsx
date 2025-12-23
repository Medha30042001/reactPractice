
import {useParams} from 'react-router-dom'

const BlogDetails = () => {

    const {id} = useParams();

  return (
    <>
        <h1>You are reading Blog ID : {id}</h1>
    </>
  )
}

export default BlogDetails