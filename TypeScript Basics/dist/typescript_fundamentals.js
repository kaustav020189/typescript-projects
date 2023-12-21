"use strict";
// FUNDAMENTAL CONCEPTS
// ====================
// Type Assertion (explicit type casting)
// --------------------------------------
let p1 = 2;
// method 1
let p2 = p1;
// p2 = 'string'    // compile error
// method 2
let p3 = p1;
// p3 = 5           // compile error
// Functions
// ---------------------
function addnum(x, y) {
  return x + y;
}
function log(message) {
  console.log(message);
}
function func1(param = 1) {
  return ["function with a tuple return and default param", param];
}
let person1 = {
  id: 1,
  name: "kaustav",
};
// so now we can declare functions which would strictly adhere to the above definition.
const addFunc = (a, b) => {
  return a + b;
};
// Classes in TypeScript
// ----------------------------------------
class Person {
  constructor(id, name, dob) {
    (this.id = id), (this.name = name), (this.dob = dob);
  }
}
let person33 = new Person(1, "kaustav", new Date("Jan 2 1989"));
class Car {
  constructor(build, vehicleType) {
    this.build = build;
    this.vehicleType = vehicleType;
  }
  showDetails() {
    return `It's a ${this.vehicleType} from ${this.build}`;
  }
}
let c1 = new Car("Toyota", "Car");
c1.showDetails();
// Inheritance - child classes / sub classes and 'super'
// -----------------------------------------------------
class Sedan extends Car {
  constructor(build, vehicleType, modelname) {
    super(build, vehicleType); // super() simply calls the parent constructor.
    this.modelname = modelname;
  }
}
let s1 = new Sedan("Toyota", "Car", "Camry");
s1.showDetails(); // parent method is still accessible.
