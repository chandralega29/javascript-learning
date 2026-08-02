// ==========================================
// break Statement
// ==========================================

// break stops the nearest loop immediately.

for (let i = 1; i <= 5; i++) {

  if (i === 3) {

    break;

  }

  console.log(i);

}

/*
Flow:

i = 1 → print
i = 2 → print
i = 3 → break
loop stops completely
*/