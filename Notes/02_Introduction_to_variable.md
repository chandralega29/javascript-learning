# JavaScript Variables

## About This Document

This document explains  what is JavaScript variables.

---

# What is a Variable?

A **variable** is a named container used to store data in memory. It allows you to store, retrieve, and modify values while your program is running.

Think of a variable as a labeled box.

```
Name
┌─────────────┐
│  Chandra    │
└─────────────┘
```

Here,

- `name` is the variable.
- `"Chandra"` is the value stored in the variable.

### Example

```javascript
let name = "Chandra";
let age = 21;

console.log(name);
console.log(age);
```

---
# Variable Naming Rules

- Must begin with a letter, `_`, or `$`.
- Cannot begin with a number.
- Variable names are case-sensitive.
- Reserved keywords cannot be used as variable names.


# Variable Declaration Keywords

JavaScript provides **three keywords** to declare variables.

- `var`
- `let`
- `const`

Each keyword has different rules regarding scope, hoisting, redeclaration, and reassignment.

---

# Declaration

Declaration means **creating a variable** by giving it a name.

```javascript
let name;
```

The variable exists, but it does not have a value yet.

---

# Initialization

Initialization means **assigning the first value** to a variable.

```javascript
let name = "Chandra";
```

or

```javascript
let name;

name = "Chandra";
```

Both examples initialize the variable.

---

# Assignment

Assignment means storing a value in a variable using the assignment operator (`=`).

```javascript
let age;

age = 21;
```

Since this is the first assignment, it is also called **initialization**.

---

# Reassignment

Reassignment means changing the value of an existing variable.



---

# Redeclaration

Redeclaration means declaring the same variable again in the same scope.

---

# JavaScript Before ES6

Before ES6 (ECMAScript 2015), JavaScript had only one keyword for declaring variables.
ECMAScript is the standard or specification for scripting languages. It defines the rules, syntax, and core features such as variables, loops, functions, and objects. JavaScript is an implementation of the ECMAScript standard. In simple terms, ECMAScript is the rulebook, and JavaScript is a programming language that follows those rules while adding extra features for web development.



Although `var` worked, it had several limitations:

- Function scope instead of block scope
- Hoisting confusion
- Global variable pollution
- Allowed accidental redeclaration
# Problems with `var`

Before ES6 (ECMAScript 2015), JavaScript only had the `var` keyword to declare variables. Although `var` worked, it had several drawbacks that made writing and maintaining large applications difficult. To overcome these limitations, ES6 introduced `let` and `const`.

---

## Problem 1: Function Scope

Variables declared with `var` are **function-scoped**, not block-scoped.

This means that if a variable is declared inside a block (`if`, `for`, `while`, etc.), it can still be accessed anywhere within the same function.

### Example

```javascript
function demo() {

    if (true) {
        var message = "Hello";
    }

    console.log(message);

}

demo();
```

**Output**

```
Hello
```

### Explanation

Even though `message` is declared inside the `if` block, it is accessible outside the block because `var` ignores block scope. It belongs to the entire function.

This can lead to unexpected behavior because variables may be accessible in places where they were not intended to be used.

---

## Problem 2: Global Pollution

If a `var` variable is declared outside any function, it becomes a **global variable**.

A global variable can be accessed and modified by any script running on the same webpage.

### Example

```javascript
var name = "Chandra";
```

Now, imagine another JavaScript file contains:

```javascript
var name = "Rahul";
```

The original value is overwritten.

This creates naming conflicts and unexpected bugs, especially in large projects where multiple developers work on the same application.

This issue is known as **Global Pollution**.

---

## Problem 3: Hoisting

Variables declared with `var` are **hoisted**.

During the memory creation phase, JavaScript moves the variable declaration to the top of its scope before executing the code.

### Example

```javascript
console.log(name);

var name = "Chandra";
```

**Output**

```
undefined
```

### Internal Execution

JavaScript treats the above code like this:

```javascript
var name;

console.log(name);

name = "Chandra";
```

The declaration is hoisted, but the initialization remains in its original position.

As a result, the variable exists before its declaration, but its value is `undefined`.

This behavior can be confusing and may lead to bugs that are difficult to identify.

---

To overcome these issues, ES6 introduced two new keywords:

- `let`
- `const`

These keywords provide safer and more predictable variable behavior.

---







---

# Comparison

| Feature | var | let | const |
|----------|-----|-----|-------|
| Scope | Function | Block | Block |
| Hoisted | Yes | Yes (TDZ) | Yes (TDZ) |
| Redeclare | Yes | No | No |
| Reassign | Yes | Yes | No |
| Must Initialize | No | No | Yes |

---

# Hoisting

Hoisting is JavaScript's behavior of moving variable declarations to the top of their scope before execution.

- `var` is hoisted and initialized with `undefined`.
- `let` is hoisted but remains in the Temporal Dead Zone until initialization.
- `const` is hoisted but also remains in the Temporal Dead Zone until initialization.

---

# Scope

JavaScript variables have different scopes.

- Global Scope
- Function Scope (`var`)
- Block Scope (`let` and `const`)

Scope determines where a variable can be accessed.

---


---

# Summary

- A variable stores data in memory.
- JavaScript provides `var`, `let`, and `const` to declare variables.
- ES6 introduced `let` and `const` to improve variable handling.
- `var` is function scoped.
- `let` and `const` are block scoped.
- `const` cannot be reassigned.
- Hoisting occurs before execution, but `let` and `const` remain in the Temporal Dead Zone until they are initialized.