// SWITCH STATEMENT:
// A switch statement is used to check multiple possible values of a variable.

// It is an alternative to writing many else if statements.

// Why use switch?

// Instead of this:

// if (item === 'apple') {
//   console.log('Apple');
// } 
// else if (item === 'banana') {
//   console.log('Banana');
// } 
// else if (item === 'orange') {
//   console.log('Orange');
// }

// We can write:
let item = "mango"
switch (item) {
  case 'apple':
    console.log('Apple');
    break;
    case 'mango':
    console.log('Apple');
    break;

  case 'banana':
    console.log('Banana');
    break;

  case 'orange':
    console.log('Orange');
    break;

  default:
    console.log('Unknown item');
}
//We use break in a switch statement to stop execution after a matching case runs.

//Without break, JavaScript continues executing the next cases too.
// Cleaner and easier to read.

// Syntax
// switch (expression) {

//   case value1:
//     // code
//     break;

//   case value2:
//     // code
//     break;

//   default:
//     // code
// }
