const incomeInput = document.getElementById("income") 
const ageInput = document.getElementById("age") 

const calculateBtn = document.getElementById("calculateBtn")

const result = document.getElementById("result")

function calculateTax(){
console.log("click")
    const income = parseInt(incomeInput.value)
    const age = parseInt(ageInput.value)

    let tax = 0

    if(!income || income<=0){
        result.textContent = "⚠️ Please enter a valid income."; 
        result.style.color = "red"
    }else{
        result.style.color ="#00e0ff"
        if(income<=25000){
            tax = 0
        }else if(income <=50000){
            tax = (income-25000)*0.1
        }else if(income <=100000){
            tax = 2500 + (income-50000)*0.2
        }else{
            tax = 12500 + (income-100000)*0.3
        }

        if(age>60){
            tax *=0.9
        }

        result.textContent = `💰 Your Estimated Tax: $${tax.toFixed(2)}`
    }

    
  result.classList.add("show")
  incomeInput.value = ""
  ageInput.value = ""  
}

calculateBtn.addEventListener("click",calculateTax)