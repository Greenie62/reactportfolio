import React, {useState,useContext} from 'react'
import {GlobalContext} from "../../../context/GlobalState"

const PayPanel = () => {
    const [customerId,setCustomerId] = useState("")
    const [error,setError] = useState("")
    const [showIdPanel,setShowIdPanel] = useState(false)
    const {toggleClientDiscount,discountId} = useContext(GlobalContext)

    const nums=[1,2,3,4,5,6,7,8,9,0,'Enter','Backspace']



    const enterButton=(e,idx)=>{
        if(discountId){
            console.log("already signed in!")
            setError("Already signed in for savings! :)")
            setTimeout(()=>{
                setError("")
            },1000)
            return;
        }
        if(error !== "")return;

        
        if(idx < 10){
            if(customerId.length >= 9){
                setError("Max-Length!")
                setTimeout(()=>{
                    setError("")
                },2000)
            }
            var ref=customerId;
            ref += e.target.textContent
            setCustomerId(ref)

        }
        else if(idx === 10){
            if(customerId.length !== 10){
                setError("Pswd too short!")
                setTimeout(()=>{
                    setError("")
                },2000)
            }
            else{
                togglePanel()
                toggleClientDiscount(true)
            }
            console.log("Enter fired!")
        }
        else{
            console.log('BKSPCE fired!')
            let ref = customerId;
            console.log(ref)
            ref=ref.split("")
            ref.pop();
            ref=ref.join("")
            
            setCustomerId(ref)
        }
    }


    const togglePanel=()=>{
        console.log("togglePanel firing")

        setShowIdPanel(!showIdPanel)

    }


    const justADemo=(arg)=>{
        if(arg === "cash"){
            alert("Sorry, this is just a demo! 😎 ")
        }
        if(arg === "cc"){
            alert("Sorry, this is just a demo, but I'll be happy to take your CC anyway. Surf over to Blog n post it! 😁")
        }
        if(arg === "other"){
            alert("Hmmm, trying to solicit other services are we? You may wanna check out the dark web for that! 😜")
        }
    }


    
    return (
        <div className="panelWrapper">
            <div style={{zIndex:!showIdPanel ? 2 : -1}} className="payOptionGrid">
                <div onClick={()=>justADemo('cash')} className="payoptiondiv">Cash</div>
                <div onClick={()=>justADemo('cc')} className="payoptiondiv">CC/Debit</div>
                <div onClick={()=>justADemo('other')} onClick={(e)=>{console.log("testing")}} className="payoptiondiv">Other</div>
                <div onClick={togglePanel} className="payoptiondiv">ShopperID</div>
            </div>
            
            <div style={{zIndex:showIdPanel ? 2 : -1}} className='shopperIdDiv'>
                <div className="displayDiv">
                    <div className="display">
                        <h4>{error === "" ? customerId : <span><span style={{color:'rgb(255,0,0,.9'}}>Error:</span>{error}</span>}</h4>
                    </div>
                </div>
                <div className="numberGrid">
                    {nums.map((n,idx)=>(
                        <div onClick={(e)=>enterButton(e,idx)} className='numBtn' key={n}>{n}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PayPanel
