let year = Number(prompt("Please enter a year..."));
let calculateZodiac = (year-4) % 12;

if (calculateZodiac == 0) {
  console.log("Rat");
} else if (calculateZodiac == 1) {
  console.log("Ox");
} else if (calculateZodiac == 2) {
  console.log("Tiger");
} else if (calculateZodiac == 3) {
  console.log("Rabbit");
} else if (calculateZodiac == 4) {
    console.log("Draggon");
} else if (calculateZodiac == 5) {
    console.log("Snake");
} else if (calculateZodiac == 6) {
    console.log("Horse");
} else if (calculateZodiac == 7) {
    console.log("Goat");
} else if (calculateZodiac == 8) {
    console.log("Monkey");
} else if (calculateZodiac == 9) {
    console.log("Rooster");
} else if (calculateZodiac == 10) {
    console.log("Dog");
} else if (calculateZodiac == 11) {
    console.log("Pig");
} else {
  console.log("You didn't put a year");
}
