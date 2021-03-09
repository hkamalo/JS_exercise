

let firstValue = parseInt(prompt("value 1 : "));
let operator = prompt("operator : ");
let secondValue = parseInt(prompt("value 2 : "));



    switch (operator){
    case "+" :
        console.log(firstValue + secondValue);
        break;
    case "-" :
        console.log(firstValue - secondValue);
        break;
    case "*" :
        console.log(firstValue * secondValue);
        break;
    case "/" :
        console.log(firstValue / secondValue);
        break;
        default:
        console.log("invalid operator")
    }
            



        
