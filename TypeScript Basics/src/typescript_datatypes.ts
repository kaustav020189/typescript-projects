// DATA TYPES
// ==========

// Basic
var id: number = 1;
const firstname: string = "kaustav";
let anyvar: any = 21;
let bool: boolean = true;
let nul: null = null;
let unde: undefined = undefined;

anyvar = "banerjee";

// Arrays
let ids: number[] = [1, 2, 3];

ids.push(3);

let arr: any[] = ["hi", true, 34];
arr.push(null);

// Tuples
let person: [number, string, boolean] = [1, "hello", true];

let person2: [number, boolean] = [2, false];

// Tuple arrays
let perTup: [number, number, string][] = [
  [1, 1, "kaustav"],
  [2, 3, "shrestha"],
];

// Unions (variables which can optionally hold more than one types)
let pid: string | number;
pid = 2;
pid = "kaustav";

// Enum (just like hard coded objects BUT WITH A SINGLE primitive type - with only the properties / variables part)
enum Direction {
  up = "up",
  left = "left",
  down = "down",
  right = "right",
}

console.log(Direction.left); // prints left

// Type - for creating custom type with mixed primitives
type person = {
  id: number;
  name: string;
};

let obj1: person = {
  id: 1,
  name: "kaustav",
};
