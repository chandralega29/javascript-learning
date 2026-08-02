// ==========================================
// Scope of Variables in JavaScript
// ==========================================

// Scope defines where a variable can be accessed
// and how long it exists in a program.

// JavaScript has five types of scope:

// 1. Global Scope
// 2. Local (Function) Scope
// 3. Block Scope
// 4. Lexical Scope
// 5. Module Scope



// ==========================================
// 1. Global Scope
// ==========================================

// A variable declared outside any function
// is called a global variable.

// It can be accessed anywhere.

let x = 10;

function func() {

    console.log(x);

}

func();



// ==========================================
// Global + Local Variable
// ==========================================

// Declaring a global variable

let a = 10;

function example() {

    // Declaring a local variable

    let b = 20;

    // Accessing global and local variables

    console.log(a, b);

}

example();



// ==========================================
// 2. Local (Function) Scope
// ==========================================

// A variable declared inside a function
// can only be accessed inside that function.

function fun2() {

    let num = 10;

    console.log(num);

}

fun2();

// console.log(num); // ReferenceError



// ==========================================
// var vs let vs const
// ==========================================

// Before ES6

// var
// Function Scoped
// Hoisted
// No Block Scope

// After ES6

// let
// Block Scoped

// const
// Block Scoped



// ==========================================
// 3. Block Scope
// ==========================================

// Variables declared with let and const
// are available only inside the block.

{

    var p = 10;

    const q = 20;

    let r = 30;

    console.log(p);

    console.log(q);

    console.log(r);

}

// var can be accessed outside the block

console.log(p);

// console.log(q); // ReferenceError

// console.log(r); // ReferenceError



// ==========================================
// 4. Lexical Scope
// ==========================================

// Inner functions can access
// variables declared in outer functions.

function outer() {

    const x = 10;

    function inner() {

        const y = 20;

        console.log(`${x} ${y}`);

    }

    inner();

}

outer();



// ==========================================
// 5. Module Scope
// ==========================================

// Example

// math.js

// export const number = 10;

// export function add(a, b) {

//     return a + b;

// }

// Another file

// import { number, add } from "./math.js";

// console.log(number);

// console.log(add(2,3));



// ==========================================
// End of Scope Examples
// ==========================================