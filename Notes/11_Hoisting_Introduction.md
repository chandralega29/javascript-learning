# Hoisting in JavaScript

## What is Hoisting?

Hoisting is JavaScript's default behavior of moving **declarations** of variables, functions, and classes to the top of their scope before the code is executed.

This happens during the **compilation phase**, before the program starts running.

Because of hoisting, some variables and functions can be used before they are declared.

However, **only declarations are hoisted, not initializations**.

---

# Definition

Hoisting refers to the behavior where JavaScript moves the declarations of variables, functions, and classes to the top of their scope during the compilation phase.

This can sometimes lead to unexpected results, especially when using:

- `var`
- `let`
- `const`
- Function Expressions
- Classes

---

# Important Points

- Hoisting applies to variable declarations.
- Hoisting applies to function declarations.
- Initializations are **not** hoisted.
- `var` is hoisted and initialized with `undefined`.
- `let` and `const` are hoisted but remain inside the **Temporal Dead Zone (TDZ)** until initialization.
- Function declarations are completely hoisted.
- Function expressions behave like variables.
- Classes are hoisted but cannot be accessed before declaration.

---

# Compilation Phase vs Execution Phase

JavaScript works in two phases.

## 1. Compilation Phase

JavaScript scans the entire code.

- Creates memory for variables.
- Creates memory for functions.
- Hoists declarations.

No code executes during this phase.

---

## 2. Execution Phase

JavaScript executes the program line by line.

Variables receive values.

Functions execute.

---

# Example

```javascript
console.log(a);

var a = 10;
```

JavaScript internally treats it like this:

```javascript
var a;

console.log(a);

a = 10;
```

Output

```
undefined
```

---

# What Gets Hoisted?

| Declaration | Hoisted | Initial Value |
|-------------|----------|---------------|
| var | ✅ Yes | undefined |
| let | ✅ Yes | TDZ |
| const | ✅ Yes | TDZ |
| Function Declaration | ✅ Yes | Complete Function |
| Function Expression | Variable Only | undefined |
| Class | ✅ Yes | TDZ |

---

# What is NOT Hoisted?

Initial values are never hoisted.

Example

```javascript
var a = 10;
```

Only this part

```javascript
var a;
```

is hoisted.

Not

```javascript
a = 10;
```

---

# Temporal Dead Zone (TDZ)

The Temporal Dead Zone is the time between entering a scope and reaching the variable declaration.

During this period,

- The variable exists.
- But it cannot be accessed.

Accessing it causes a

```
ReferenceError
```

---

Example

```javascript
console.log(name);

let name = "John";
```

Output

```
ReferenceError
```

---

# Why Does TDZ Exist?

TDZ helps prevent accidental use of variables before initialization.

This makes JavaScript safer and avoids many bugs.

---

# Types of Hoisting

JavaScript supports different kinds of hoisting.

1. Variable Hoisting with var
2. Variable Hoisting with let and const
3. Function Declaration Hoisting
4. Function Expression Hoisting
5. Hoisting inside Functions
6. Class Hoisting
7. Re-declaring Variables with var
8. Hoisting inside Loops
9. Function Parameter Hoisting
10. Hoisting in Nested Functions

Each type behaves differently.

---

# Summary

- Hoisting happens before execution.
- Only declarations are hoisted.
- Initializations stay in their original place.
- var becomes undefined.
- let and const stay inside the TDZ.
- Function declarations are completely hoisted.
- Function expressions behave like variables.
- Classes are hoisted but stay in TDZ.

---

# Key Points

- Hoisting moves declarations, not values.
- var can be accessed before declaration.
- let and const cannot.
- Function declarations can be called before they are written.
- Function expressions cannot.
- TDZ exists only for let, const, and classes.