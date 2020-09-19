import React, {useState, useContext} from 'react'
import {GlobalContext} from "../../../context/GlobalState"

const AddBlog = ({toggle,setToggle}) => {
    const [ topic, setTopic ] = useState("")
    const {fetchPosts} = useContext(GlobalContext)

    const addTopic=()=>{
        fetch("/forum/addtopic",{
            method:"POST",
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify({topic})
        })
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
            fetchPosts()
            setToggle(!toggle)
        })
    }



    return (
        <div style={{height:toggle ? 50 : 0, transition:'1s ease',overflow:'hidden'}}>
            <div className="addTopicDiv">
                <label htmlFor="topic">Topic:</label>
                <input type="text" name="topic" value={topic} onChange={(e)=>setTopic(e.target.value)} id="topic" className="topicinput" placeholder="topic..." autoComplete="off"/>
                <button onClick={addTopic} className="addTopicBtn">Add</button>
            </div>
        </div>
    )
}

export default AddBlog
