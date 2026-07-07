// # `let`

// `let` was introduced in ES6 to overcome the limitations of `var`. It provides block scope and prevents accidental redeclaration.

// ## Features

// - Block scoped
// - Hoisted (Temporal Dead Zone)
// - Cannot be redeclared
// - Can be reassigned

// ## Valid Example

let age = 21;

console.log(age);

age = 22;   // Reassignment

console.log(age);


// **Output**

// 21
// 22


// ## Invalid Example (Redeclaration)

let age_ = 21;

let age_ = 22;

// **Output**


// SyntaxError: Identifier 'age' has already been declared


