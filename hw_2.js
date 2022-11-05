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
arr[4] = prompt('Enter a value')
console.log(arr[4]);
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
