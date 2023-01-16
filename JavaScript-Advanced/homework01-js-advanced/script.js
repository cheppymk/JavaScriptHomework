//Task 1
function sumOfN(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumOfN(5));

//Task 2
function printDigits(num) {
    num = num.toString();
    for (let i = 0; i < num.length; i++) {
        console.log(num[i]);
    }
}
printDigits(12345);

//Task 3
function changeSign(arr) {
    for (let i = 0; i < arr.length; i++) {
     if (arr[i] < 0) {
        arr[i] = Math.abs(arr[i]);
      }
    }
   return arr;
  }
  
let arr = [4, -9, -98, -1, 444, 3, -555];
let res = changeSign(arr);
console.log(res); 

//Task 4
function copyOddElements(arr) {
    let oddElements = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        oddElements.push(arr[i]);
      }
    }
    return oddElements;
  }

const givenArr = [12, 45, 88, 1, 567, 3, 91];
let result = copyOddElements(givenArr);
console.log(result); 
  
//Task 5
function removeNonNumeric(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            newArr.push(arr[i])
        }
    }
    return newArr
}

const mixArr = [12, 45, 'a', 88, 1, 'b', 567, 3, 91, 'c'];
let final = removeNonNumeric(mixArr);
console.log(final); 
