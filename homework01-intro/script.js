const phonePrice = 119.95;
const phoneTax = 0.05;
const phonePostTaxPrice = phonePrice-phonePrice * phoneTax;

let phoneNumber = Number (prompt("how many phone want:"));

let total = phoneNumber * phonePostTaxPrice;
console.log("The total price for your order ", total);