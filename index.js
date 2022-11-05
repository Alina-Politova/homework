// HOMEWORK_1


// Task_2

let myLastName = 'Politova';
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
  string: 'Alina',
  number: 25,
  boolean: true,
  undefined: m,
  null: null,
};

// Task_5
let isAdult = confirm('Are you adult?');
console.log(isAdult);

// Task_6

let myName, mySurname, myGroup, myBirthYear;
myName = 'Alina';
mySurname = 'Politova';
myGroup = 'JS Fundamentals';
myBirthYear = 1997;
let married = false;
console.log (typeof myName);
console.log (typeof mySurname);
console.log (typeof myGroup);
console.log (typeof myBirthYear);
console.log (typeof married);
console.log (myBirthYear, married, myName);
let children = null;
let husband;
console.log (children,husband); 

// Task_7

let login = prompt('Please, enter your password:');
let email = prompt ('Now, enter your email:');
let password = prompt ('Finally, enter your password:');
alert('Dear, ${login}, your email is ${email}, your password is ${password}')

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
console.log (secInHour, secInday, secInMonth_30Day, secInMonth_31Day, secInMonthFebriary)


// HOMEWORK_2


// Task_1

let x = 1;
let y = 2;
let res1 =  '' + x + y;
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

// Task_2

let number = prompt('Please, enter a number')
if (number % 2 === 0 && number > 0) {
    console.log (' Your number is paired and positive')
} else if (number % 7 === 0) {
    console.log ('Your number is multiple')
} else {
    console.log ('It`s not a number')
};

// Task_3

const arr = [13, 'JS', true, null];
console.log(arr.length);
arr[5] = prompt('Enter a value')
console.log(arr[5]);
arr.shift();
console.log(arr);

// Task_4

let cities = ['Rome', 'Lviv', 'Warsaw']; 
cities = cities.join('*');
console.log(cities);

// Task_5

let adult = prompt('Are you adult?');
if (adult >= 18) {
    alert('Are you an adult!')
} else if(adult < 18) {
    alert('You are too young!')
} else {
    alert('Wrong value')
}