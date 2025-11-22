// SELECT ALL ELEMENT
const colorCode = document.querySelector(".color-code")
console.log(colorCode)
const button = document.querySelector("button")

function ChangeBackGroundColor(){
    const code = "#" + Math.floor(Math.random()* Math.pow(255,3)).toString(16).padStart(6,0)
    console.log(code)
    document.body.style.backgroundColor = code
    colorCode.textContent = code

}

button.addEventListener("click", ChangeBackGroundColor)