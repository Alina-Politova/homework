// Task_1

{
  let arr = ["Tom", "Sam", "Ray", "Bob"];
  let [x, y, , ...z] = arr;
  console.log(x);
  console.log(y);
  console.log(z);
}

// Task_2

{
  let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
  };
  let {
    names: [, name2, , name4],
    ages: [, age2, , age4],
  } = data;
  console.log(name2);
  console.log(age2);
  console.log(name4);
  console.log(age4);
}

//  Task_3

{
function mul(...args) {
   let numbers = args.filter((item) => typeof item === 'number');
   if (numbers.length === 0) {
      return 0
   }
   let result = 1;
   numbers.forEach((item) => result = result * item);
   return result;
}
 console.log(mul(1, "str", 2, 3, true));
 console.log(mul(null, "str", false, true));
}

//  Task_4

{
let server = {
   data: 0,
   convertToString: function (callback) {
      callback(() => this.data + "");
   }
};
let client = {
   server: server,
   result: "",
   calc: function (data) {
      this.server.data = data;
      this.server.convertToString(this.notification());
   },
   notification: function () {
      return ((callback) => this.result = callback());
   }
};

client.calc(123);
console.log(client.result); 
console.log(typeof client.result); 
}

//  Task_5

{
let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);

function mapBuilder(keysArray, valuesArrays) {
  if (keysArray.length !== valuesArrays.length) {
    return;
  }
  let arrayLength = keysArray.length;
  let map = new Map();
  for (let i = 0; i < arrayLength; i++) {
    map.set(keysArray[i], valuesArrays[i]);
  }
  console.log(map.size);
  console.log(map.get(2));
}
}
