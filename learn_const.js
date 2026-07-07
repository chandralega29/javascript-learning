// # `const`

// `const` was introduced in ES6 to declare variables whose values should not be reassigned. A `const` variable must be initialized when it is declared.

// ## Features

// - Block scoped
// - Hoisted (Temporal Dead Zone)
// - Cannot be redeclared
// - Cannot be reassigned
// - Must be initialized during declaration

// ## Valid Example

const country = "India";

console.log(country);


// **Output**


// India


// ## Invalid Example (Reassignment)


const country2 = "India";

country2 = "USA";


// **Output**


// TypeError: Assignment to constant variable.


// ## Invalid Example (Declaration Without Initialization)

const country3;
// **Output**

// SyntaxError: Missing initializer in const declaration
