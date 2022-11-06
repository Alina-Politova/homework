// HOMEWORK_4

// Task_1

{
  function calcRectangleArea(width, height) {
    if (typeof width != "number" && typeof height != "number") {
      return;
    }
    return width * height;
  }

  calcRectangleArea(1, 2);
}

// Task_2

{
  function checkAge() {
    let age = prompt("Enter your age");
    try {
      if (age.length === 0) {
        throw new Error("The field is empty! Please enter your age!");
      } else if (Number(age) < 14) {
        throw new Error("Too young!");
      } else if (typeof age != "number") {
        throw new Error("The field is not a number! Please enter your age!");
      } else {
        alert("Welcome to the cinema!");
      }
    } catch (error) {
      alert(error.message);
    }
  }
  checkAge();
}

// Task_3

{
  class MonthException {
    monthes = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    constructor(message) {
      this.message = message;
    }
    showMonthName(month) {
      if (month < 1 || month > 12) {
        throw new Error(this.message);
      } else {
        return this.monthes[month - 1];
      }
    }
  }
  console.log(new MonthException("Incorrect month number!").showMonthName(4));
}

// Task_4

{
  function showUser(id) {
    try {
      if (id < 0) {
        throw new Error(`ID must not be negative: ${id}`);
      } else {
        return { id: id };
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  showUser(10);

  function showUsers(ids) {
    if (!isArray(ids)) {
      return;
    }
    return ids.map((id) => showUser(id)).filter((item) => item);
  }
  showUsers([1, 2, 3, 4]);
}
