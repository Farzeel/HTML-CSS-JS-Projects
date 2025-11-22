

   const boyName = document.getElementById("name1");
    const girlName = document.getElementById("name2");
const calculateBtn = document.querySelector("button")

const result = document.getElementById("result")

function calculateLove(){
   
    let score = 0
 
     const partnerName = girlName.value.trim() 

     for(let letter of partnerName){
      if(boyName.value.includes(letter)){
        score +=1
      }
     }


    
     const totalChars = partnerName.length + boyName.value.trim().length;
     const percentage = (score / totalChars) * 100;
     
   

    result.classList.add("show")
    result.textContent = `❤️ ${percentage.toFixed(2)}% ❤️`
    girlName.value = ""
    boyName.value = ""
}

calculateBtn.addEventListener("click", calculateLove);