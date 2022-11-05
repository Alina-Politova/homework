// HOMEWORK_1

// Task_2

let myLastName = "Politova";
console.log(myLastName);

// Task_3

let a;
let b;
a = 1;
b = 2;
console.log(a, b);
a = b;
console.log(a, b);

// Task_4

let m;
const user = {
  string: "Alina",
  number: 25,
  boolean: true,
  undefined: m,
  null: null,
};

// Task_5
let isAdult = confirm("Are you adult?");
console.log(isAdult);

// Task_6

let myName, mySurname, myGroup, myBirthYear;
myName = "Alina";
mySurname = "Politova";
myGroup = "JS Fundamentals";
myBirthYear = 1997;
let married = false;
console.log(typeof myName);
console.log(typeof mySurname);
console.log(typeof myGroup);
console.log(typeof myBirthYear);
console.log(typeof married);
console.log(myBirthYear, married, myName);
let children = null;
let husband;
console.log(children, husband);

// Task_7

let login = prompt("Please, enter your password:");
let email = prompt("Now, enter your email:");
let password = prompt("Finally, enter your password:");
alert(`Dear, ${login}, your email is ${email}, your password is ${password}`);

// Task_8
let secInMinute = 60;
let secInHour = secInMinute * 60;
let secInday = secInHour * 24;
let secInMonth_30Day = secInday * 30;
let secInMonth_31Day = secInday * 31;
let secInMonthFebriary = {
  leapYear: secInday * 29,
  сommonYear: secInday * 28,
};
console.log(
  secInHour,
  secInday,
  secInMonth_30Day,
  secInMonth_31Day,
  secInMonthFebriary
);

