// ==========================================
// Nested Loops
// ==========================================

// A nested loop means:

// A loop inside another loop.

// Basic Syntax

// for (outer loop) {

//     for (inner loop) {

//     }

// }

// The inner loop runs completely every time
// the outer loop runs once.

for (let i = 1; i <= 3; i++) {

  console.log("Outer loop:", i);

  for (let j = 1; j <= 2; j++) {

    console.log(" Inner loop:", j);

  }

}

console.log("\n***another program***\n");

for (let i = 1; i <= 3; i++) {

  for (let j = 1; j <= 3; j++) {

    console.log(i + " × " + j + " = " + (i * j));

  }

}