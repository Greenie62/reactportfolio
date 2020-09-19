import React, {useEffect, useState, useContext} from 'react'
import {MBHeader, MBTopInfo, AddBlog, Post, AlertModal} from "../components"
import {GlobalContext} from "../../../context/GlobalState"

const ForumPage = ({pages,setPages}) => {
    const [user,setUser] = useState("")
    const [toggle, setToggle] = useState(false)

    const {fetchPosts,posts} = useContext(GlobalContext)


    useEffect(()=>{

        fetch("/auth")
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
            if(!res.auth){
                setPages(pages-1)
            }
            else{
                setUser(res.user)
            
            }
          
        })
    },[])

    useEffect(()=>{

        fetchPosts()
        console.log(posts)
    },[])


    return (
        <div className="mbContainer">
        <AlertModal/>
        <MBHeader/>
        <MBTopInfo toggle={toggle} setToggle={setToggle} user={user}/>
        <AddBlog toggle={toggle} setToggle={setToggle}/>
        <div className="postContainer">
        {posts ? posts.length ? posts.map((p,idx)=>(
            <Post key={idx}
                  post={p}/>
        )) : <button onClick={()=>window.location.reload()}>Refresh</button> : 'nada squared'}
        </div>
    </div>
    )
}

export default ForumPage
