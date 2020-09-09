import React from 'react'
import profile_pic from "../../../assets/pic.png"


 const ResumeCard = () => {
    return (
        <div className='resumeCard'>
            <div className='imageCol'>
          <img src={profile_pic} className="profileImg" alt="profilePic"/> 
          </div>
          <div className="resumeCol">
                <div className="card">
                    <div className="cardHeader">
                        <h3 className='cardHeaderh3'>About Me:</h3>
                    </div>
                    <div className="cardBody">
                        <p>Graduated from UCLA MERN Full stack course and been practicing my ...,Javascript/React ever since.</p>
                    </div>
                </div>
              </div> 
        </div>
    )
}


export default ResumeCard


