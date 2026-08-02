// Loops in JavaScript allow a block of code to run multiple times as long as a given condition is satisfied.
// They help reduce repetition and make programs more efficient and organized.

// Loops continue running until the condition becomes false.
// They are useful for iterating over arrays, strings, and ranges of values.

// ==========================================
// 1. for Loop
// ==========================================

// The for loop repeats a block of code a specific number of times.
// It contains initialization, condition, and increment/decrement in one line.

// Syntax

// for (initialization; condition; increment/decrement) {

// }

for (let step = 0; step < 5; step++) {

  // Runs 5 times, with values of step 0 through 4.

  console.log(`Walking step is ${step}`);

}

// ==========================================
// How it Works
// ==========================================

// First Round

// Initialization

// let step = 0

// The variable starts at 0.

// Condition Check

// step < 5

// Means:

// 0 < 5

// This is true, so the loop runs.

// Inside the Loop

// console.log(step);

// prints:

// 0

// Increment

// step++

// means:

// step = step + 1

// So now:

// step = 1

// **************************************

// step = 0
// check 0 < 5 ✅
// print 0
// increment to 1

// step = 1
// check 1 < 5 ✅
// print 1
// increment to 2

// step = 2
// check 2 < 5 ✅
// print 2
// increment to 3

// step = 3
// check 3 < 5 ✅
// print 3
// increment to 4

// step = 4
// check 4 < 5 ✅
// print 4
// increment to 5

// step = 5
// check 5 < 5 ❌
// loop stops