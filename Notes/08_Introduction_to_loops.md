# Loops in JavaScript

## What are Loops?

Loops in JavaScript allow a block of code to run multiple times as long as a given condition is satisfied. They help reduce repetition and make programs more efficient and organized.

Loops continue running until the condition becomes false.

They are useful for:

- Iterating over arrays
- Iterating over strings
- Iterating over ranges of values
- Performing repetitive tasks

---

# Why Do We Use Loops?

Suppose you want to print the same message five times.

Without loops:

```javascript
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
```

This creates unnecessary repetition.

Using a loop:

```javascript
for (let i = 0; i < 5; i++) {
    console.log("Hello");
}
```

The loop repeats the statement automatically.

---

# Types of Loops in JavaScript

JavaScript provides several ways to repeat code.

1. for Loop
2. while Loop
3. do...while Loop
4. for...of Loop
5. for...in Loop
6. forEach() Method
7. Nested Loops
8. break Statement
9. continue Statement
10. Labels (break & continue)

Each loop is used for different situations.

---

# 1. for Loop

The **for loop** repeats a block of code a specific number of times.

It contains:

- Initialization
- Condition
- Increment/Decrement

All in one line.

Use it when the number of iterations is known.

Example file:

```
for-loop.js
```

---

# 2. while Loop

The **while loop** repeats a block of code as long as the specified condition is true.

The condition is checked **before** executing the loop body.

If the condition is false initially, the loop never executes.

Example file:

```
while-loop.js
```

---

# 3. do...while Loop

The **do...while loop** is similar to the while loop.

The difference is that the loop body executes first, and only then the condition is checked.

Therefore, a do...while loop always runs at least once.

Example file:

```
do-while.js
```

---

# 4. for...of Loop

The **for...of loop** gives values.

You get the actual values from iterable objects.

It is mainly used with:

- Arrays
- Strings
- Maps
- Sets

Example file:

```
for-of.js
```

---

# 5. for...in Loop

The **for...in loop** gives keys or property names.

It is mainly used to iterate through object properties.

Example file:

```
for-in.js
```

---

# 6. forEach()

The **forEach()** method executes a function once for every array element.

It is an array method.

For every element:

- Takes one item
- Passes it to the callback function
- Executes the function
- Moves to the next item

Example file:

```
foreach.js
```

---

# 7. Nested Loops

A nested loop means:

A loop inside another loop.

The inner loop completes all of its iterations every time the outer loop runs once.

Example file:

```
nested-loops.js
```

---

# 8. break Statement

The **break** statement immediately stops the nearest loop.

Control moves to the statement after the loop.

It is useful when you want to terminate a loop early.

Example file:

```
break.js
```

---

# 9. continue Statement

The **continue** statement skips the current iteration.

The loop immediately starts the next iteration.

It does not terminate the loop.

Example file:

```
continue.js
```

---

# 10. Labels

A label is simply a name given to a loop or block.

Labels allow **break** or **continue** to target a specific loop.

They are mainly useful in nested loops.

Example files:

```
labeled-break.js
labeled-continue.js
```

---
