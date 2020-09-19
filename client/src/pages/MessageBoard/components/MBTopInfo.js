import React from 'react'
import {FaPlus} from "react-icons/fa"

const MBTopInfo = ({toggle,setToggle,user}) => {
    return (
        <div className="mbTopInfoRow">
            <div className="topInfoDFlex">
            <p className="topInfoP">Create a post</p>
            <FaPlus onClick={()=>setToggle(!toggle)} className="createPostIcon"/>
            </div>
            <h4 className="topInfoh4">{user}</h4>
        </div>
    )
}

export default MBTopInfo
