// HOMEWORK_5

// Task_1

{
  let mentor = {
    course: "JS fundamental",
    duration: 3,
    direction: "web-development",
  };
  function propsCount(currentObject) {
    return Object.keys(currentObject).length;
  }
  console.log(propsCount(mentor));
}

// Task_2

{
  let me = {
    name: "Alina",
    surname: "Politova",
    age: 25,
    married: false,
    nationality: "ukrainian",
  };
  function showProps(obj) {
    console.log(Object.keys(obj));
    console.log(Object.values(obj));
  }
  showProps(me);
}

// Task_3

{
  class Person {
    constructor(name, surname) {
      this.name = name;
      this.surname = surname;
    }
    showFullName() {
      console.log(`${this.name} ${this.surname}`);
    }
  }
  class Student extends Person {
    constructor(name, surname, year) {
      super(name, surname);
      this.year = year;
    }
    showFullName(middleName) {
      console.log(`${this.name} ${this.surname} ${middleName}`);
    }
    showCourse() {
      console.log(new Date().getFullYear() - this.year);
    }
  }
  let person1 = new Person("Вася", "Иванов");
  person1.showFullName();
  let student1 = new Student("John", "Snow", 2018);
  student1.showFullName("Targarien");
  student1.showCourse();
}

// Task_4

{
  function sortWorkersBySalary(workersArray) {
    let listOfWorkers = workersArray.map((workerItem) => {
      return {
        name: workerItem.fullName,
        salary: workerItem.showSalaryWithExperience(),
      };
    });

    listOfWorkers.sort((a, b) => (a.salary > b.salary ? 1 : -1));
    listOfWorkers.map((worker) => {
      console.log(`${worker.name}: ${worker.salary}`);
    });
  }
  class Worker {
    constructor(fullName, dayRate, workingDays) {
      this.fullName = fullName;
      this.dayRate = dayRate;
      this.workingDays = workingDays;
    }
    _experience = 1.2;

    get experience() {
      return this._experience;
    }

    set experience(exp) {
      this._experience = exp;
      console.log("New experience", this._experience);
    }

    showSalary() {
      console.log(this.dayRate * this.workingDays);
      return this.dayRate * this.workingDays;
    }

    showSalaryWithExperience() {
      console.log(this.dayRate * this.workingDays * this._experience);
      return this.dayRate * this.workingDays * this._experience;
    }
  }

  let worker = new Worker("Alina Politova", 10000, 20);
  worker.showSalary();
  worker.showSalaryWithExperience();
  worker.experience = 1.5;
  worker.showSalaryWithExperience();

  let worker2 = new Worker("Bill Gates", 1000, 3);
  worker2.showSalary();
  worker2.showSalaryWithExperience();
  worker2.experience = 1.5;
  worker2.showSalaryWithExperience();

  let worker3 = new Worker("Jony Ive", 1000, 8);
  worker3.showSalary();
  worker3.showSalaryWithExperience();
  worker3.experience = 1.5;
  worker3.showSalaryWithExperience();

  sortWorkersBySalary([worker, worker2, worker3]);
}

// Task_5

{
  function handleFigures(arrayOfFigures) {
    let sumOfArea = 0;
    arrayOfFigures.map((figure) => {
      if (figure instanceof GeometricFigure) {
        console.log(
          `Geometric Figure: ${figure.toString()} - area: ${figure.getArea()}`
        );

        sumOfArea += figure.getArea();
      }
    });
    console.log("Total area", sumOfArea);
  }

  class GeometricFigure {
    getArea() {
      return;
    }

    toString() {
      return this.constructor.name;
    }
  }

  class Triangle extends GeometricFigure {
    constructor(A, B) {
      super();
      this.A = A;
      this.B = B;
    }
    getArea() {
      console.log("S = ", 0.5 * this.A * this.B);
      return 0.5 * this.A * this.B;
    }
  }

  class Square extends GeometricFigure {
    constructor(A) {
      super();
      this.A = A;
    }

    getArea() {
      console.log("S = ", this.A ** 2);
      return this.A ** 2;
    }
  }

  class Circle extends GeometricFigure {
    PI = 3.14;

    constructor(r) {
      super();
      this.r = r;
    }

    getArea() {
      console.log("S = ", this.PI * this.r ** 2);
      return this.PI * this.r ** 2;
    }
  }

  const figures = [new Triangle(3, 4), new Square(7), new Circle(5)];
  handleFigures(figures);
}
