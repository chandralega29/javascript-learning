// ==========================================
// apply() Method
// ==========================================

// apply() works like call().

// Difference:

// Arguments are passed as an array.

const person = {

    name: "GFG",

    greet: function (city, country) {

        console.log("Hello, " + this.name + " from " + city + ", " + country);

    }

};

person.greet("Delhi", "India");

// Output

// Hello, GFG from Delhi, India

// ------------------------------------------

const greet = person.greet;

greet.apply(person, ["Noida", "India"]);

// Output

// Hello, GFG from Noida, India

// Explanation

// apply()

// sets

// this = person

// and takes arguments

// inside an array.