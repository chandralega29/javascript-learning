// ==========================================
// while Loop
// ==========================================

// The while statement executes its statements as long as a specified condition evaluates to true.

// Syntax

// while (condition) {

// }

// The condition is checked before every iteration.

// If the condition is false initially,
// the loop body will never execute.

let n = 0;
let x = 0;

while (n < 3) {

  n++;

  x += n;

  x = x + n;

  console.log(`n is ${n} and x is ${x}`);

}