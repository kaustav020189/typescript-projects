// FUNDAMENTAL CONCEPTS
// ====================

// Type Assertion (explicit type casting)
// --------------------------------------

let p1: any = 2;

// method 1
let p2 = <number>p1;
// p2 = 'string'    // compile error

// method 2
let p3 = p1 as boolean;
// p3 = 5           // compile error

// Functions
// ---------------------

function addnum(x: number, y: number): number {
  return x + y;
}

function log(message: string | number | null): void {
  console.log(message);
}

function func1(param: any = 1): [string, number] {
  return ["function with a tuple return and default param", param];
}

// Interfaces
// -------------------------

// Syntax is almost same as type, but
// - in type we can use union, interfaces not possible
// - for object declarations we usually use interfaces and not types

interface personInterface {
  readonly id: number; // once the variable person1 below is initialized, id cannot be changed further
  name: string;
  age?: number; // ? makes this property optional
}

let person1: personInterface = {
  id: 1,
  name: "kaustav",
};

// Setting function structures as well using interfaces

interface MathFunc {
  (x: number, y: number): number;
}

// so now we can declare functions which would strictly adhere to the above definition.

const addFunc: MathFunc = (a: number, b: number): number => {
  return a + b;
};

// Classes in TypeScript
// ----------------------------------------

class Person {
  private id: number; // only accessible inside this class
  name: string;
  protected dob: Date; // only accesible in this class and child classes

  constructor(id: number, name: string, dob: Date) {
    (this.id = id), (this.name = name), (this.dob = dob);
  }
}

let person33 = new Person(1, "kaustav", new Date("Jan 2 1989"));
// console.log(person33.id); // compile error

// Implementing interface on classes
// -------------------------------------------

interface Vehicle {
  build: string;
  vehicleType: string;
  showDetails(): string;
}

class Car implements Vehicle {
  build: string;
  vehicleType: string;

  constructor(build: string, vehicleType: string) {
    this.build = build;
    this.vehicleType = vehicleType;
  }

  showDetails(): string {
    return `It's a ${this.vehicleType} from ${this.build}`;
  }
}

let c1: Car = new Car("Toyota", "Car");
c1.showDetails();

// Inheritance - child classes / sub classes and 'super'
// -----------------------------------------------------

class Sedan extends Car {
  modelname: string;

  constructor(build: string, vehicleType: string, modelname: string) {
    super(build, vehicleType); // super() simply calls the parent constructor.
    this.modelname = modelname;
  }
}

let s1 = new Sedan("Toyota", "Car", "Camry");
s1.showDetails(); // parent method is still accessible.

// Functions - Callback concepts (passing a function as parameter)
// ---------------------------------------

function modifyNumber(number: number, callback: any) {
  return callback(number);
}

const addFive = (a: number): number => {
  return a + 5;
};

console.log(modifyNumber(2, addFive));

// forEach() vs map()

let arr99: number[] = [1, 2, 3, 4];

console.log(arr99.forEach((el) => el + 5)); // produces undefined because forEach doesn't return new array, modifies existing
console.log(arr99.map((el) => el + 5)); // produces [6,7,8,9] -> new array
console.log(arr99.map((el) => el + 5).reduce((acc, el) => el * acc)); // chaining other functions possible for map()
