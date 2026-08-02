// ==========================================
// for...in Loop
// ==========================================

// for...in gives keys/property names.

// Used to loop through keys/properties of an object.

const person = {

  name: "John",

  age: 25

};

for (const key in person) {

  // console.log(key)

  console.log(key, person[key]);

}

/*
Output:

name John
age 25
*/