// ==========================================
// continue Statement
// ==========================================

// continue skips the current iteration
// and jumps to the next one.

for (let i = 1; i <= 5; i++) {

  if (i === 3) {

    continue;

  }

  console.log(i);

}

/*
Flow:

i = 3

continue

skips console.log(i)

jumps to next iteration
*/