# Scope of Variables in JavaScript

## What is Scope?

Scope in JavaScript defines where a variable can be accessed or used within a program. It controls the visibility and lifetime of variables across different parts of the code.

## Why is Scope Important?

- Determines the accessibility of variables in different parts of the program.
- Helps prevent conflicts by restricting variable usage to specific areas.
- Improves code organization and readability.
- Defines the lifetime of variables during program execution.

---

# Types of Scope

JavaScript mainly has five types of scope.

1. Global Scope
2. Local (Function) Scope
3. Block Scope
4. Lexical Scope
5. Module Scope

---

# 1. Global Scope

A global variable is declared outside any function or block.

It can be accessed anywhere in the program, including inside functions.

### Characteristics

- Declared outside functions.
- Accessible throughout the program.
- Exists until the program ends.
- Can be accessed inside any function.

---

# 2. Local (Function) Scope

A local variable is declared inside a function.

It can only be accessed inside that function.

### Characteristics

- Declared inside a function.
- Cannot be accessed outside the function.
- Destroyed after the function finishes.

---

# var vs let and const

Before ES6 (2015), JavaScript only had **var**.

### var

- Function scoped
- Global scoped (if declared outside functions)
- Hoisted
- Does not support block scope

### let

- Introduced in ES6
- Block scoped
- Cannot be redeclared in the same scope

### const

- Introduced in ES6
- Block scoped
- Cannot be reassigned

---

# 3. Block Scope

A block is any code inside curly braces `{ }`.

Variables declared using **let** and **const** are available only inside that block.

Variables declared using **var** ignore block scope.

### Characteristics

- let → Block Scoped
- const → Block Scoped
- var → Function Scoped

---

# 4. Lexical Scope

Lexical scope means an inner function can access variables declared in its outer function.

However, the outer function cannot access variables declared inside the inner function.

### Characteristics

- Inner function can access outer variables.
- Outer function cannot access inner variables.
- Used in closures.

---

# 5. Module Scope

Module scope means variables and functions belong only to their own JavaScript module.

They can only be used in other files using **export** and **import**.

### Characteristics

- Prevents global pollution.
- Organizes code into modules.
- Uses export and import.

---
