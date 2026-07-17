// # 12. Optional Chaining Operator (?.)

// ## Definition

// The optional chaining operator (`?.`) safely accesses nested object properties.

// If a property doesn't exist, it returns `undefined` instead of throwing an error.

// ### Syntax

// object?.property


// ### Example


let student = {
  name: "Aman",
  address: {
    city: "Delhi"
  }
};

console.log(student.address?.city);
console.log(student.contact?.phone);



// ### Real-world Example

let user = {
  name: "John"
};

console.log(user.address?.city);

// Instead of throwing an error, JavaScript returns:


