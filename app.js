let temp = document.getElementById("temp");
let btn = document.querySelector(".btn")
let type = document.getElementById("type")
let result = document.getElementById("result")
let rslt = document.querySelector(".rslt")

let tempConvertor = ()=>{
    let degree = parseFloat(temp.value)
    if(type.value === "fahrenheit"){
        let convertTemp = ((degree - 32) * 5/9).toFixed(2)
        result.textContent = `${convertTemp} Celsius` 
    }else if(type.value === "celsius"){
        let convertTemp = (degree * 9/5) + 32
        result.textContent = `${convertTemp} Fahrenheit` 
    }


    event.preventDefault()


}

btn.addEventListener('click', tempConvertor)
