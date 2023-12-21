"use strict";
// DATA TYPES
// ==========
// Basic
var id = 1;
const firstname = "kaustav";
let anyvar = 21;
let bool = true;
let nul = null;
let unde = undefined;
anyvar = "banerjee";
// Arrays
let ids = [1, 2, 3];
ids.push(3);
let arr = ["hi", true, 34];
arr.push(null);
// Tuples
let person = [1, "hello", true];
let person2 = [2, false];
// Tuple arrays
let perTup = [
    [1, 1, "kaustav"],
    [2, 3, "shrestha"],
];
// Unions (variables which can optionally hold more than one types)
let pid;
pid = 2;
pid = "kaustav";
// Enum (just like hard coded objects BUT WITH A SINGLE primitive type - with only the properties / variables part)
var Direction;
(function (Direction) {
    Direction["up"] = "up";
    Direction["left"] = "left";
    Direction["down"] = "down";
    Direction["right"] = "right";
})(Direction || (Direction = {}));
console.log(Direction.left); // prints left
let obj1 = {
    id: 1,
    name: "kaustav",
};
