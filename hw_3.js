// HOMEWORK_3

// Task_1;

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
      console.log(a + " is even");
    } else {
      console.log(a + " is odd");
    }
  }
}

// Task_3

{
  function randArray(k) {
    const arr = [];
    for (i = 0; i < k; i += 1) {
      arr[i] = Math.floor(Math.random() * 500) + 1;
    }
    console.log(arr);
  }
  randArray(5);
}

// Task_4

{
  function raiseToDegree(a, b) {
    let result = a ** b;
    return result;
  }
  raiseToDegree(2, 3);
}

// Task_5

{
  function findMin() {
    let min = arguments[0];
    for (let i = 1; i < arguments.length; i += 1) {
      if (arguments[i] < min) {
        min = arguments[i];
      }
    }
    return min;
  }
}

// Task_6

{
  function findUnique(arr) {
    const setArr = new Set(arr);
    return setArr.size === arr.length;
  }
  console.log(findUnique([1, 2, 3, 5, 3]));
}

// Task_7

{
  function lastElem(arr, num) {
    if (num == null) {
      console.log(arr.pop());
    } else {
      console.log(arr.slice(-num));
    }
  }
  console.log(lastElem([3, 4, 10, -5]));
  console.log(lastElem([3, 4, 10, -5], 2));
  console.log(lastElem([3, 4, 10, -5], 8));
}

// Task_8

{
  function bigFirstLatter(str) {
    const array1 = str.split(" ");
    const newarray1 = [];
    for (let i = 0; i < array1.length; i += 1) {
      newarray1.push(array1[i].charAt(0).toUpperCase() + array1[i].slice(1));
    }
    return newarray1.join(" ");
  }
  console.log(bigFirstLatter("i love java script"));
}
