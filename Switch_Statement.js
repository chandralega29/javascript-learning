// SWITCH STATEMENT

// switch is used when one variable needs to be compared
// against multiple possible values.

let item = "mango";

switch (item) {
  case "apple":
    console.log("Apple");
    break;

  case "mango":
    console.log("Mango");
    break;

  case "banana":
    console.log("Banana");
    break;

  case "orange":
    console.log("Orange");
    break;

  default:
    console.log("Unknown item");
}

// break stops execution after a matching case.
// Without break, JavaScript continues to execute
// the following cases (called fall-through).