


 function renderTime(){
    let time=new Date().toLocaleTimeString()

    time=time.split("")
    time.splice(time.length-3,time.length-1)
    time=time.join("")
    time=time.split(":")
    console.log(time)
    let hour=time[0]
    let minute=time[1]
    let seconds=time[2]


    console.log(hour,minute,seconds)
    return [hour,minute,seconds]

}


function runTime(hour,minute,seconds){

    console.log(`${hour}:${minute}:${seconds}`)
    if(seconds === 60){
        seconds=0;
        minute++
    }
     if(minute === 60){
        minute=0
        hour++
    }
   
seconds++
    setTimeout(()=>runTime(hour,minute,seconds),500)





}


module.exports = renderTime()