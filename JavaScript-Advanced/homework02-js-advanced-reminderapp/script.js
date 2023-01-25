let titleInput = document.getElementById("title");
let priorityInput = document.getElementById("priority");
let colorInput = document.getElementById("color");
let descriptionInput = document.getElementById("description");
let btnAdd = document.getElementById("btnAdd");
let btnShowAll = document.getElementById("btnShowAll");
let table = document.getElementById("table");
let tableBody = document.getElementById("tableBody");

let reminders = [];

class Reminder {
  constructor(title, priority, color, description) {
    this.title = title;
    this.priority = priority;
    this.color = color;
    this.description = description;
  }
}

btnAdd.addEventListener("click", function () {
  if (!titleInput.value) {
    console.log("You must enter a title");
    return;
  }
  if (!priorityInput.value) {
    console.log("You must enter a priority");
    return;
  }
  if (!colorInput.value) {
    console.log("You must enter a color");
    return;
  }
  if (!descriptionInput.value) {
    console.log("You must enter a description");
    return;
  }
  reminders.push(
    new Reminder(
      titleInput.value,
      priorityInput.value,
      colorInput.value,
      descriptionInput.value
    )
  );
});

btnShowAll.addEventListener("click", function () {
  tableBody.innerHTML = "";
  for (Reminder of reminders) {
    let row = tableBody.insertRow();
    let titleCell = row.insertCell();
    titleCell.innerHTML = Reminder.title;
    titleCell.style.color = Reminder.color;
    let priorityCell = row.insertCell();
    priorityCell.innerHTML = Reminder.priority;
    let descriptionCell = row.insertCell();
    descriptionCell.innerHTML = Reminder.description;
  }
  table.style.display = "block";
});
