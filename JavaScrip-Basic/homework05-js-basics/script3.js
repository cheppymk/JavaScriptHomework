//domashna 3
const recipeName = prompt('Enter the name of the recipe:');
const numIngredients = prompt('Enter the number of ingredients:');

const heading = document.createElement('h1');
heading.textContent = recipeName;
document.body.appendChild(heading);

const list = document.createElement('ul');

for (let i = 0; i < numIngredients; i++) {
  const ingredient = prompt(`Enter the name of ingredient ${i+1}:`);

  const listItem = document.createElement('li');
  listItem.textContent = ingredient;
  list.appendChild(listItem);
}

document.body.appendChild(list);

const table = document.createElement('table');

for (let i = 0; i < numIngredients; i++) {
  const ingredient = prompt(`Enter the name of ingredient ${i+1}:`);

  const row = document.createElement('tr');
  const cell = document.createElement('td');
  cell.textContent = ingredient;
  row.appendChild(cell);
  table.appendChild(row);
}

document.body.appendChild(table);