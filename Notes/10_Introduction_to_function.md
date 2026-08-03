# Functions in JavaScript

## What are Functions?

Functions in JavaScript are reusable blocks of code designed to perform a specific task. Instead of writing the same code multiple times, you can write it once inside a function and call it whenever needed.

Functions help organize, reuse, and modularize code. They can take inputs, perform operations, and return outputs.

---

# Why Do We Use Functions?

Without functions, we may have to write the same code repeatedly.

Example (Without Function)

```javascript
console.log("Welcome");
console.log("Welcome");
console.log("Welcome");
```

This creates unnecessary repetition.

Using a function:

```javascript
function welcome() {
    console.log("Welcome");
}

welcome();
welcome();
welcome();
```

The function can be reused multiple times.

---

# Advantages of Functions

- Reduce code duplication.
- Improve code readability.
- Make programs modular.
- Easy to debug and maintain.
- Promote code reusability.
- Make programs easier to understand.

---

# Function Syntax

```javascript
function functionName(parameters) {

    // code

    return value;

}
```

### Syntax Explanation

- **function** → Keyword used to declare a function.
- **functionName** → Name of the function.
- **parameters** → Input values accepted by the function.
- **return** → Sends a value back to the caller.
- **{}** → Function body containing the code to execute.

---

# Function Calling

A function only executes when it is called.

Example

```javascript
function greet() {

    console.log("Hello");

}

greet();
```

Output

```
Hello
```

---

# Parameters and Arguments

Functions can receive input values.

## Parameter

A parameter is a placeholder defined in the function declaration.

Example

```javascript
function greet(name) {

    console.log("Hello " + name);

}
```

Here,

`name` is the parameter.

---

## Argument

An argument is the actual value passed to the function when it is called.

```javascript
greet("Alice");
```

Here,

`"Alice"` is the argument.

Output

```
Hello Alice
```

---

# Default Parameters

Default parameters are used when no argument is passed during the function call.

If no value is provided, JavaScript automatically uses the default value.

Example

```javascript
function greet(name = "Guest") {

    console.log("Hello " + name);

}

greet();

greet("Aman");
```

Output

```
Hello Guest

Hello Aman
```

---

# Return Statement

The `return` statement sends a result back from the function.

Once `return` executes, the function stops immediately.

Example

```javascript
function add(a, b) {

    return a + b;

}

let result = add(5, 10);

console.log(result);
```

Output

```
15
```

---

# Types of Functions in JavaScript

JavaScript supports many types of functions.

1. Named Function
2. Anonymous Function
3. Function Expression
4. Arrow Function (ES6)
5. Immediately Invoked Function Expression (IIFE)
6. Callback Function
7. Constructor Function
8. Async Function
9. Generator Function
10. Recursive Function
11. Higher-Order Function
12. Nested Function
13. Pure Function
14. Rest Parameter Function

Each type is designed for different programming situations.

---

# 1. Named Function

A function that has its own name.

Used for reusable code and easier debugging.

Example file

```
named-function.js
```

---

# 2. Anonymous Function

A function without a name.

Usually assigned to a variable or passed as an argument.

Example file

```
anonymous-function.js
```

---

# 3. Function Expression

A function stored inside a variable.

It can be named or anonymous.

Example file

```
function-expression.js
```

---

# 4. Arrow Function (ES6)

A shorter syntax for writing functions using the `=>` operator.

Example file

```
arrow-function.js
```

---

# 5. Immediately Invoked Function Expression (IIFE)

A function that executes immediately after it is created.

Example file

```
iife.js
```

---

# 6. Callback Function

A function passed as an argument to another function.

Example file

```
callback.js
```

---

# 7. Constructor Function

Used to create multiple objects having the same structure.

Called using the `new` keyword.

Example file

```
constructor.js
```

---

# 8. Async Function

Used to perform asynchronous operations.

Returns a Promise.

Example file

```
async.js
```

---

# 9. Generator Function

A function that can pause and resume its execution using `yield`.

Example file

```
generator.js
```

---

# 10. Recursive Function

A function that calls itself until a stopping condition is met.

Example file

```
recursive.js
```

---

# 11. Higher-Order Function

A function that accepts another function as an argument or returns another function.

Example file

```
higher-order.js
```

---

# 12. Nested Function

A function declared inside another function.

The inner function can access variables from the outer function.

Example file

```
nested-function.js
```

---

# 13. Pure Function

A function that always produces the same output for the same input and has no side effects.

Example file

```
pure-function.js
```

---

# 14. Rest Parameter Function

Uses the `...` operator to collect multiple arguments into an array.

Example file

```
rest-parameter.js
```

---

