// HOMEWORK_2

// Task_1
{
let x = 1;
let y = 2;
let res1 = "" + x + y;
console.log(res1);
console.log(typeof res1);
let res2 = String(Boolean(x === 1)) + y;
console.log(res2);
console.log(typeof res2);
let res3 = Boolean(x === 1) && Boolean(y === 2);
console.log(res3);
console.log(typeof res3);
let res4 = NaN + x + y;
console.log(res4);
console.log(typeof res4);
}
// Task_2
{
let number = prompt("Please, enter a number");
if (number % 2 === 0 && number > 0) {
  console.log(" Your number is paired and positive");
} else if (number % 7 === 0) {
  console.log("Your number is multiple");
} else {
  console.log("It`s not a number");
}
}
// Task_3
{
const arr = [13, "JS", true, null];
console.log(arr.length);
arr[4] = prompt("Enter a value");
console.log(arr[4]);
arr.shift();
console.log(arr);
}
// Task_4
{
let cities = ["Rome", "Lviv", "Warsaw"];
cities = cities.join("*");
console.log(cities);
}
// Task_5
{
let adult = prompt("How old are you?");
if (adult >= 18) {
  alert("Are you an adult!");
} else if (adult < 18) {
  alert("You are too young!");
} else {
  alert("Wrong value!");
}
}
// Task_6
{
let a = prompt("Enter the value of the first side of the triangle");
let b = prompt("Enter the value of the second side of the triangle");
let c = prompt("Enter the value of the third side of the triangle");

if (a > 0 && b > 0 && c > 0) {
  let p = (a + b + c) * 0.5;
  let areaOfTriangle = Math.sqrt(p * (p - a) * (p - b) * (p - c));
  console.log("Area Of Triangle = " + areaOfTriangle.toFixed(3));
} else {
  alert("Incorrect data!");
}
if (
  a ** 2 === b ** 2 + c ** 2 ||
  b ** 2 === a ** 2 + c ** 2 ||
  c ** 2 === a ** 2 + b ** 2
) {
  console.log("The triangle is rectangular!");
} else {
  console.log("The triangle isn`t rectangular!");
}
}
// Task_7
{
let time = prompt("Tell me, what time is it?");

if ( time <= 5 || time >= 23) {
  alert("Good night!");
} else if (time > 5 && time <= 11) {
  alert("Good morning!");
} else if (time > 11 && time <= 17) {
  alert("Good afternoon!");
} else if (time > 17 && time < 23) {
  alert("Good evening!");
}

switch (true) {
  case (time <= 5 || time >= 23):
    alert("Good night!");
    break;
  case (time > 5 && time <= 11):
    alert("Good morning!");
    break;
  case (time > 11 && time <= 17):
    alert("Good afternoon!");
    break;
  case (time > 17 && time < 23):
    alert("Good evening!");
    break;
}
}
