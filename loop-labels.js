// ==========================================
// Loop Labels
// ==========================================

// What is a label?

// A label is just a name you give to a loop or block.

// Example

// myLoop:
// while(true) {

//     console.log("Hello");

// }

// Here:

// myLoop → label name

// while(true) → labeled loop

// The label lets break or continue
// target a specific loop.

// ==========================================
// Why labels are needed
// ==========================================

// Labels are useful mainly in nested loops.

// Example

for (let i = 1; i <= 3; i++) {

  for (let j = 1; j <= 3; j++) {

    if (j === 2) {

      break;

    }

    console.log(i, j);

  }

}

// Here:

// break only stops the INNER loop

// outer loop still continues

// ==========================================
// break with label
// ==========================================

outerLoop:
for (let i = 1; i <= 3; i++) {

  for (let j = 1; j <= 3; j++) {

    if (j === 2) {

      break outerLoop;

    }

    console.log(i, j);

  }

}

/*
Flow:

i = 1, j = 1 → print

j = 2 → break outerLoop

BOTH loops stop

Without label, only inner loop stops.
*/

// ==========================================
// continue with label
// ==========================================

outerLoop:
for (let i = 1; i <= 3; i++) {

  for (let j = 1; j <= 3; j++) {

    if (j === 2) {

      continue outerLoop;

    }

    console.log(i, j);

  }

}