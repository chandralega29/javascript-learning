// ==========================================
// forEach()
// ==========================================

// Used to run a function for every array element.

// It is an array method.

// Takes one item
// Puts it into the parameter variable
// Runs the function
// Repeats for the next item

const colors = ["red", "blue", "green"];

colors.forEach(color => {

  console.log(color);

});

// Another way

// const colors = ["red", "blue", "green"];

// colors.forEach(function(color) {

//     console.log(color);

// });

/*
Output:

red
blue
green
*/