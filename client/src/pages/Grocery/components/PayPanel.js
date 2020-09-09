import React from 'react'

const PayPanel = () => {
    const nums=[1,2,3,4,5,6,7,8,9,0,'Enter','Backspace']
    return (
        <div className="panelWrapper">
            <div className="payOptionGrid">
                <div className="payoptiondiv">Cash</div>
                <div className="payoptiondiv">CC/Debit</div>
                <div className="payoptiondiv">Other</div>
                <div className="payoptiondiv">ShopperID</div>
            </div>
            
            <div className='shopperIdDiv'>
                <div className="displayDiv">
                    <div className="display"></div>
                </div>
                <div className="numberGrid">
                    {nums.map(n=>(
                        <div className='numBtn' key={n}>{n}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PayPanel
