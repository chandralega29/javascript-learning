# JavaScript Function Binding

## What is Function Binding?

Function Binding in JavaScript is the process of associating a function with a specific object so that the `this` keyword inside the function always refers to that object.

Normally, the value of `this` depends on how a function is called.

Function binding allows us to control the value of `this`.

---

# Definition

Function Binding is the process of binding a function to a specific object using methods like:

- bind()
- call()
- apply()

These methods allow us to manually set the value of `this`.

---

# Why Do We Need Function Binding?

Sometimes we store a method inside another variable.

When we do this, the connection between the function and its object is lost.

Example

```javascript
const person = {

    name: "GFG",

    greet: function(){

        console.log("Hello " + this.name);

    }

};

const greet = person.greet;

greet();
```

Output

```
Hello undefined
```

### Why?

Originally,

```
this → person
```

After assigning

```javascript
const greet = person.greet;
```

the function is no longer called using the `person` object.

So,

```
this
```

becomes

- Global Object (non-strict mode)
- undefined (strict mode)

---

# What is `this`?

`this` refers to the object that is currently executing the function.

Example

```javascript
const person = {

    name: "John",

    greet(){

        console.log(this.name);

    }

};

person.greet();
```

Output

```
John
```

Here,

```
this = person
```

---

# Function Binding Methods

JavaScript provides three methods.

1. bind()
2. call()
3. apply()

Each method sets the value of `this`.

---

# 1. bind()

Creates a **new function** with `this` permanently bound.

The new function can be called later.

---

# 2. call()

Immediately calls the function.

Arguments are passed one by one.

---

# 3. apply()

Immediately calls the function.

Arguments are passed as an array.

---

# Difference

| Method | Executes Immediately | Returns New Function | Arguments |
|---------|----------------------|----------------------|-----------|
| bind() | ❌ No | ✅ Yes | Normal |
| call() | ✅ Yes | ❌ No | Normal |
| apply() | ✅ Yes | ❌ No | Array |

---

# Arrow Functions and this

Arrow functions do **not** have their own `this`.

They inherit `this` from the surrounding (lexical) scope.

This behavior is called **Lexical this**.

---

