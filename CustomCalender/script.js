const calendarDays = document.getElementById("calendarDays");
const prevMonth = document.getElementById("prevMonth"); 
const nextMonth = document.getElementById("nextMonth"); 
const dateDisplay = document.getElementById("rangeDisplay")
const monthYear = document.getElementById("monthYear")
 

let currentDate = new Date();
const TODAY_DATE = new Date();




window.addEventListener("DOMContentLoaded", function () {
    const dateTime = TODAY_DATE.toLocaleDateString("en-us", {
        weekday: "long", 
        year: "numeric", 
        month: "long", 
        day: "numeric" 
    });   dateDisplay.innerText = dateTime

    const headerDisplay = currentDate.toLocaleDateString("en-us", {
 
        month: "long", 
        year: "numeric", 
        
    });   
    monthYear.innerText = headerDisplay
render()

});

const isSameDay = (date1, date2) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };
  
  const isThisMonth = (targetDate) => {
    const today = new Date();
  
    return (
      targetDate.getFullYear() === today.getFullYear() &&
      targetDate.getMonth() === today.getMonth()
    );
  };


const render =()=>{
    
    
    let totalDaysofCurrentMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDate();
    let firstDayofMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );
  
    let lastDayofCurrentMonth =
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
      ).getDay() == 0
        ? 7
        : new Date(
            currentDate.getFullYear(),
            currentDate.getMonth() + 1,
            0
          ).getDay();
  
    console.log(lastDayofCurrentMonth);
    const day = firstDayofMonth.getDay() == 0 ? 7 : firstDayofMonth.getDay();
  
    let totalDaysofLastMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate();
  let selectedElement  =null
    const fillerDays = day -1

    calendarDays.innerHTML = '';
  
    if(fillerDays>0){
      const startDaysofLastMonth = totalDaysofLastMonth - fillerDays+1
      Array.from({ length: fillerDays }, (_, i) => {
          const div = this.document.createElement("div");
          div.textContent = startDaysofLastMonth + i;
          div.classList.add("other-month", "day", "disabled-hover");
          calendarDays.append(div);
        });
    }
  
  
    Array.from({ length: totalDaysofCurrentMonth }, (_, i) => {
      const div = this.document.createElement("div");
      div.textContent = i + 1;
      div.classList.add("day");
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth();
      const compareDate = new Date(year, month, i + 1);
      const iSameDay = isSameDay(TODAY_DATE, compareDate);
    
      if (iSameDay) {
        div.classList.add("selected");
      }
      calendarDays.append(div);

      div.addEventListener("click",(e)=>{
        // console.log(e)
        if(selectedElement) selectedElement.classList.remove("onClick")
       selectedElement = e.target
       selectedElement.classList.add("onClick")
       console.log(selectedElement)
      })
    });

    let fillerForNextMonth = 42 - totalDaysofCurrentMonth -fillerDays
    if(fillerForNextMonth>0){
        Array.from({ length: fillerForNextMonth }, (_, i) => {
            const div = this.document.createElement("div");
            div.textContent =  i+1;
            div.classList.add("other-month", "day", "disabled-hover");
            calendarDays.append(div);
          });
      } 
    
}


nextMonth.addEventListener("click",()=>{
    currentDate.setMonth(currentDate.getMonth() + 1); 


    const dateTime = currentDate.toLocaleDateString("en-us", {
     
        month: "long", 
        year: "numeric", 
        
    });   
    monthYear.innerText = dateTime
render()
})


prevMonth.addEventListener("click",()=>{
currentDate.setMonth(currentDate.getMonth() - 1); 


const dateTime = currentDate.toLocaleDateString("en-us", {
 
    month: "long", 
    year: "numeric", 
    
});   
monthYear.innerText = dateTime
render()
})




