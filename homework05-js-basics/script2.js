const numbers = [2, 4, 5];

let sum = 0;
let equation = '';

const list = document.createElement('ul');
document.body.appendChild(list);

for (const number of numbers) {
  sum += number;
  equation += `${number} + `;

  const listItem = document.createElement('li');
  listItem.textContent = number;
  list.appendChild(listItem);
}

const sumElement = document.createElement('div');
sumElement.textContent = `Sum: ${sum}`;
document.body.appendChild(sumElement);

const equationElement = document.createElement('div');
equationElement.textContent = `Equation: ${equation.slice(0, -2)} = ${sum}`;
document.body.appendChild(equationElement);