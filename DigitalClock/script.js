let time = document.getElementById("time")
let date = document.getElementById("date")
const options = {weekday:'long',year:"numeric",month:"short", day:"numeric"}


function updateTime(){
    let currentDate = new Date()
        
    let fullDate = currentDate.toLocaleDateString("en-us",options)
    date.textContent = fullDate
    
        let hours = currentDate.getHours().toString().padStart(2,0)
        let minutes = currentDate.getMinutes().toString().padStart(2,0)
        let seconds = currentDate.getSeconds().toString().padStart(2,0)
        
        // hours = hours<10? "0"+hours:hours
        // minutes = minutes<10? "0"+minutes:minutes
        // seconds = seconds<10? "0"+seconds:seconds
        
    
        
        
        time.textContent = `${hours}:${minutes}:${seconds}`
}

updateTime()
setInterval(updateTime,1000)