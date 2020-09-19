import React, {useState, useEffect} from 'react'
import {ForumPage,ForumCover,ForumSignIn} from "./pages"

import "./MessageBoard.css"

const MessageBoard = () => {
    const [pages, setPages] = useState(3);


  


    switch(pages){


        case 1:
            return(
            <ForumCover pages={pages}
                       setPages={setPages}/>
                  )

        case 2:
            return(
                <ForumSignIn pages={pages}
                             setPages={setPages}/>
            )
    
    
        case 3:
            return(
                <ForumPage 
                           pages={pages}
                           setPages={setPages}/>
                )

        default:
            console.log("thats a unknown page")

    }
}

export default MessageBoard
