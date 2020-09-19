import React from 'react'

const ForumCover = ({pages,setPages}) => {
    return (
        <div onClick={()=>setPages(pages+1)} className="forumCover">
            <h1 className="forumCoverh1">Forum </h1>
            <h1 className="forumCoverh1two">Messageboard</h1>
        </div>
    )
}

export default ForumCover
