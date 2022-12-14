//China horoscope

let year = Number(prompt("Please enter a year..."));

function calculateZodiac(year) {
    switch (year % 12) {
        case 0:
            return 'Monkey';
            break;
        case 1:
            return 'Rooster';
            break;
        case 2:
            return 'Dog';
            break;
        case 3:
            return 'Pig';
            break;
        case 4:
            return 'Rat';
            break;
        case 5:
            return 'Ox';
            break;
        case 6:
            return 'Tiger';
            break;
        case 7:
            return 'Rabbit';
            break;
        case 8:
            return 'Dragon';
            break;
        case 9:
            return 'Snake';
            break;
        case 10:
            return 'Horse';
            break;
        case 11:
            return 'Sheep';
            break;
        default:
            return 'You should enter a year'
            break
                
    }
}

let result = calculateZodiac(year)
console.log(result)


//Change Fareheit to Celsius function

function farToCel(celsius){
	let result = celsius * 1.8 + 32;
	return result;
}
function celToFar(farenheits){
	let result = (5/9) * (farenheits-32);
	return result;  
}

let personChoice = prompt("Enter F for farenheit and C for celsius");
let personInput = parseInt(prompt("Please enter value:"));
if(personChoice === "F"){
	console.log(`${celToFar(personInput)}C`);
} else if(personChoice === "C"){
	console.log(`${farToCel(personInput)}F`);
} else {
	console.log("ERROR!");
}


//returns its type and prints it in the console

function checkTypeOf(x) {
    if (typeof(x) === "number") {
        console.log("x is a number")
    }
    if (typeof(x) === "string") {
        console.log("x is a string")
    }
    if (typeof(x) === "undefined") {
        console.log("x is undefined")
    }
    if (typeof(x) === "boolean") {
        console.log("x is boolean")
    }
    if (typeof(x) === "object") {
        console.log("x is object")
    }
}

checkTypeOf(5)
checkTypeOf("Tosho")
checkTypeOf({name:'Stojche', age:34})
checkTypeOf()




//Calculate dog age to human and vice versa homework 2

function calculateDogAge(humanAge) {
    let dogYears = 7 * humanAge;
    return dogYears
}

function calculateHumanAge(dogAge){
    let humanYears = dogAge / 7;
    return humanYears
}
let choseDogOrHuman = prompt("Enter D for dog and H for human years");
let inputAge = parseInt(prompt("Please enter age"));
function optionOfInputers (choseDogOrHuman){
switch (choseDogOrHuman) { 
    case "D":
    return `${calculateDogAge(inputAge)} dog years`;
    break; 
    case "H": 
    return `${calculateHumanAge(inputAge)} human years`;
    break; 
    default : 
    return "enter valid optons";

}
}

let finalResult = optionOfInputers(choseDogOrHuman);
console.log(finalResult)

//ATM machine homework


function requestMoney(amount){
    if(amount > balance){
    return "Not enough money"

  } else{
    let balanceLeft = balance-amount;
    return `you have witdrawn ${amount}, and your balance is ${balanceLeft}`
  }

 }
 
 let balance = 5000;
 amount = Number(prompt("Enter the amount you want to withdraw"));
 requestMoney(amount)  


 