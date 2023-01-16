//find numbers in array 

function numberCount(number, array) {
  let occurences = 0;
  for(let i = 0; i < array.length; i++){
      if(array[i] === number){
          occurences++;
      }
  }
  return occurences;
} 
debugger; 
let input = parseInt(prompt("Enter a number:"));
let testArray = [2, 5, 6, 3, 5, 5, 2, 5, 7, 8, 2];
console.log(`There are ${numberCount(input, testArray)} occurences of ${input} in the array!`);



//FILTER ODD/EVEN NUMBERS FUNCTION

function filterOddEven(array, type){
  let result = [];
  if(type === "even"){
     for (let num of array) {
         if(num % 2 === 0){
             result.push(num);
         }
     } 
     return result;
  } else if(type === "odd"){
      for (let num of array) {
          if(num % 2 !== 0){
              result.push(num);
          }
      } 
      return result;
  } else {
      console.log("The type was not correct. Please enter odd or even");
      return null;
  }
}


//Homework 1 

function tellStory(name, mood, activity) {
  return `This is ${name}. ${name} is a nice person. Today they are ${mood}. They are ${activity} all day. The end.`;
  }
  console.log(tellStory("Tosho", "happy", "singing"));

  

//Homework 2
  
function sumNumbers(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
      if (Number.isNaN(Number(numbers))) {
        return "Invalid input";
      }
      sum += numbers[i];
      
    }
    return sum;
  }
  
  console.log(sumNumbers([1, 2, 3, 4, 5])); 
  
//Homework 3 

function concatenateStrings(strings) {
  return strings.join(" ");
}

console.log(concatenateStrings(["Hello", "there", "students", "of", "SEDC", "!"]));

//Homework 4

for (let i = 1; i <= 20; i++) {
  console.log(i);
  if (i % 2 === 0) {
    console.log("\n");
  } else {
    console.log(" ");
  }
}

//Homework 5

function sumMaxMin(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return max + min;
}

const arr = [3, 5, 6, 8, 11];
const sum = sumMaxMin(arr);
console.log(sum);


//Homework 6

function getFullNames(firstNames, lastNames) {
  let fullNames = [];

  for (let i = 0; i < firstNames.length; i++) {
    let fullName = (i + 1) + ". " + firstNames[i] + " " + lastNames[i];
    fullNames.push(fullName);
  }

  return fullNames;
}

let firstNames = ["Tosho", "Petko"];
let lastNames = ["Micevski", "Petkovski"];

let fullNames = getFullNames(firstNames, lastNames);
console.log(fullNames); 

