import React from 'react'

 const TechnologyChart = () => {
     const feTech=['Javascript','React','Vue','HTML','CSS']
     const beTech=["Node","Express"]
     const dbTech=['Mongoose',"MySQL"]

     let goFwd=true;


     function runRequest(){
   
        var requestDiv=document.querySelector(".requestDiv")
        var lineOneLeft=parseInt(window.getComputedStyle(document.querySelector(".lineone")).getPropertyValue('left'));
        var lineOneTop=parseInt(window.getComputedStyle(document.querySelector(".lineone")).getPropertyValue('top'));
        var lineOneEnd=parseInt(window.getComputedStyle(document.querySelector(".lineone")).getPropertyValue('width'));

        var lineTwoLeft=parseInt(window.getComputedStyle(document.querySelector(".linetwo")).getPropertyValue('left'));
        var lineTwoTop=parseInt(window.getComputedStyle(document.querySelector(".linetwo")).getPropertyValue('top'));
        var lineTwoEnd=parseInt(window.getComputedStyle(document.querySelector(".linetwo")).getPropertyValue('width'));

        var lineThreeLeft=parseInt(window.getComputedStyle(document.querySelector(".linethree")).getPropertyValue('left'));
        var lineThreeTop=parseInt(window.getComputedStyle(document.querySelector(".linethree")).getPropertyValue('top'));
        var lineThreeEnd=parseInt(window.getComputedStyle(document.querySelector(".linethree")).getPropertyValue('width'));


        var codeSpecs=[
            {start:lineOneLeft, stop:lineOneEnd + lineOneLeft,top:lineOneTop+5},
            {start:lineTwoLeft, stop:lineTwoEnd + lineTwoLeft,top:lineTwoTop+5},
            {start:lineThreeEnd + lineThreeLeft, stop:lineThreeLeft,top:lineThreeTop+5},
        ]

        // console.log("Line:",lineOneLeft, lineOneTop,lineOneEnd)
        // console.log("Line:",lineTwoLeft, lineTwoTop,lineTwoEnd)
        // console.log("Line:",lineThreeLeft, lineThreeTop,lineThreeEnd)

        console.log(codeSpecs)




        // console.log(lineOneLeft,lineOneEnd)
        
        requestDiv.style.left=`${lineOneLeft+5}px`
        requestDiv.style.top=`${lineOneTop-3}px`


    }










  
  



    return (
        <div className="techChartContainer">
            <div className='frontEnd'>
            {feTech.map((f,idx)=>(
            <h3 key={idx} className="listh3">{f}</h3>
            ))}
            
            </div>
            <div className='requestDiv'></div>
            <div className="line lineone"></div>
            <div className="line linetwo"></div>
            <div className="line linethree"></div>


            <div className="backEnd">
                <h3 className="listh3">Node.JS</h3>
                <h3 className="listh3">Express</h3>
         

            </div>

            <div className="db">
                <h3 className="listh3">Mongoose</h3>
                <br/>
                <h3 className="listh3">MySQL</h3>
            </div>

            <button className='requestBtn' onClick={runRequest}>Click</button>
        </div>
    )
}


export default TechnologyChart


