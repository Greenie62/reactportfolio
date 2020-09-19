import React, {useContext} from 'react'
import {GlobalContext} from "../../../context/GlobalState"

const Post = ({post}) => {
    const {destroyPost} = useContext(GlobalContext)


    const deletePost=(id)=>{
        console.log(id)
        destroyPost(id)
    }



    return (
        <div className='postDiv'>
            <div className="postFlex">
            <div>
            <h3>{post.title}</h3>
        <small>By:{post.author}</small>
        <small className="smallDate"> {post.createdAt ? `Created at:${new Date(post.createdAt).toLocaleDateString()}` : null }</small>
            </div>
            <h5>Likes:{post.likes}</h5>

            <span onClick={()=>deletePost(post._id)} className="deleteSpan">&times;</span>
            </div>
            <div className='borderBottom'></div>
        </div>
    )
}

export default Post
