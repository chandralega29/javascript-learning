// ==========================================
// bind() Method
// ==========================================

// bind() creates a NEW function.

// The new function always uses
// the specified object as 'this'.

const person = {

    name: "GFG",

    greet: function () {

        console.log("Hello, " + this.name);

    }

};

// Storing the function separately

const greet = person.greet;

// Without bind()

greet();

// Output

// Hello, undefined

// Why?

// 'this' no longer refers to person.

// ------------------------------------------

// Using bind()

const boundGreet = greet.bind(person);

boundGreet();

// Output

// Hello, GFG

// Explanation

// bind(person)

// permanently connects

// this → person

// It returns a NEW function.