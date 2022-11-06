// HOMEWORK_3

Task_1

{
const arr = [2, 3, 4, 5];
let count = 1;
for (let p of arr) {
    count *= p;
}
console.log(count);

let i = 0;
let result = 1;
while (i < arr.length) {
 result *= arr[i];
 i += 1;   
}
console.log("Task_1 - " + result);
}

// Task_2

{
for (let a = 0; a <= 15; a += 1) {
    if (a % 2 === 0) {
        console.log(a + ' is even');
    } else {
        console.log(a + ' is odd');
    }
}
}

// Task_3

{
    function randArray(k) {
    const arr = []; 
    for(i = 0; i < k; i += 1) {
        arr[i] = Math.floor(Math.random() * 500) + 1;
    }
    console.log(arr);
    }
    randArray(5);
}

// Task_4

{


}

// Task_5

// Task_6

// Task_7

// Task_8


