// ==========================================
// call() Method
// ==========================================

// call() immediately invokes the function.

// Arguments are passed one by one.

const person = {

    name: "GFG",

    greet: function (city) {

        console.log("Hello, " + this.name + " from " + city);

    }

};

person.greet("Delhi");

// Output

// Hello, GFG from Delhi

// ------------------------------------------

const greet = person.greet;

// Using call()

greet.call(person, "Noida");

// Output

// Hello, GFG from Noida

// Explanation

// call()

// sets

// this = person

// and immediately executes the function.