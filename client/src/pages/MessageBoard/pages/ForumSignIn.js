import React, {useState} from 'react'

const ForumSignIn = ({pages,setPages}) => {
    const [username,setUsername] = useState("")


    const getToken =() =>{
        console.log(username)
        fetch("/forum/signin",{
            method:"POST",
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify({username})
        })
        .then(res=>{
            console.log(res)
            return res.json()
        })
        .then(res=>{
            console.log(res)
            setPages(pages+1)
        })
    }


    function keyEnter(e){
       if(e.key === "Enter"){
           getToken()
       }
       return;
    }


    
    return (
        <div className="blogSignIn">
            <div className="signInCard">
                <div className="signInCardHeader">
                    <h3 className="cardHeaderh3">Sign in for an auth token</h3>
                </div>
                <div className="signInCardBody">
                    <div className="formDiv">
                        <label htmlFor="username">Username:</label>
                        <input autoFocus type="text" value={username} onKeyDown={(e)=>keyEnter(e)} onChange={(e)=>setUsername(e.target.value)} className="usernameinput" name="username" id="username" placeholder="username..." autoComplete="off"/>
                        <br/>
                        <small className="text-muted">Get your token</small>
                        <button onClick={getToken} className='getTokenBtn'>Enter</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ForumSignIn
