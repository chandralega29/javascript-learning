// ==========================================
// do...while Loop
// ==========================================

// The do...while statement repeats until a specified condition evaluates to false.

// Syntax

// do {

//   statement

// } while (condition);

// The statement is always executed once before the condition is checked.

// If condition is true,
// the statement executes again.

// At the end of every execution,
// the condition is checked.

// When the condition becomes false,
// execution stops.

let i = 0;

console.log(`original i value is ${i}`);

do {

  i += 1;

  console.log(`now i value is ${i}`);

} while (i < 5);

// After checking the while condition,
// if it is true,
// control goes back to the do block.