// basically used to create re-usable components
// ** it's a placeholder for a situation where we want to use variable datatypes for a function / class (mostly)
// but using 'any' will not help because then the STRICT TYPE is lost.
// At compile time, or runtime, the type check would fail, if we use any. Instead we use <T> a placeholder,
// and set the type as and when we implement the function / class.

// problem with any

function arrayDisplay(items: any[]): any[] {
  return new Array().concat(items); // sends a new array with concatenated items
}

let numArray = arrayDisplay([1, 2, 3, 4]); // contains array of type 'any'
let strArray = arrayDisplay(["kaustav", "shrestha"]); // contains array of type 'any'

// so following statement doesn't give error, BUT IT SHOULD
numArray.push("john");

// solution - using generics

function arrayDisplay2<T>(items: T[]): T[] {
  // changing the parameter type to T is not mandatory, however, in order to enforce strict type check
  // during the returning array creation, we must give it.
  return new Array().concat(items);
}

let numArray2 = arrayDisplay2<number>([1, 2, 3, 4]); // contains array of type 'any'
let strArray2 = arrayDisplay2<string>(["kaustav", "shrestha"]); // contains array of type 'any'

// following now gives error
// numArray2.push("john");
