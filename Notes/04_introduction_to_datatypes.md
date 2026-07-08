# JavaScript Data Types

## What is a Data Type?

A **data type** tells JavaScript what kind of value is stored in a variable.

### Example

```javascript
let age = 20;      // Number
let name = "John"; // String
```

---

# Types of Data Types

JavaScript has **2 categories** of data types:

1. Primitive Data Types
2. Non-Primitive (Reference) Data Types

---

# Primitive Data Types

Primitive data types store **a single, simple value**.

## Features

- Stores one value
- Immutable (cannot be changed)
- Stored directly in memory
- Faster and memory-efficient

There are **7 Primitive Data Types**:

1. Number
2. String
3. Boolean
4. Null
5. Undefined
6. Symbol (ES6)
7. BigInt (ES2020)

---

## 1. Number

Stores integers and decimal numbers.

Special Number values:

- `Infinity`
- `-Infinity`
- `NaN` (Not a Number)

### Example

```javascript
let age = 20;
let price = 99.99;

console.log(age);
console.log(price);
```

### Special Values

```javascript
console.log(10 / 0);        // Infinity
console.log(-10 / 0);       // -Infinity
console.log("Hello" * 2);   // NaN
```

---

## 2. String

Stores text.

Strings can be written using:

- Double Quotes `" "`
- Single Quotes `' '`
- Backticks `` ` ` ``

### Example

```javascript
let name = "Chandra";
let city = 'Madurai';
let msg = `Hello ${name}`;

console.log(name);
console.log(city);
console.log(msg);
```

---

## 3. Boolean

Stores only two values:

- `true`
- `false`

### Example

```javascript
let isStudent = true;
let isLoggedIn = false;

console.log(isStudent);
console.log(isLoggedIn);
```

---

## 4. Null

Represents an intentionally empty value.

### Example

```javascript
let profilePicture = null;

console.log(profilePicture);
```

---

## 5. Undefined

A variable that is declared but not assigned a value.

### Example

```javascript
let age;

console.log(age);
```

### Difference between Null and Undefined

| Null | Undefined |
|------|-----------|
| Intentionally empty | No value assigned yet |
| Assigned by the programmer | Assigned automatically by JavaScript |

### Example

```javascript
let a = null;
let b;

console.log(a); // null
console.log(b); // undefined
```

---

## 6. Symbol (ES6)

Creates a unique value.

Even if two Symbols have the same description, they are different.

### Example

```javascript
let s1 = Symbol("JavaScript");
let s2 = Symbol("JavaScript");

console.log(s1 == s2);
```

**Output**

```text
false
```

---

## 7. BigInt (ES2020)

Stores very large whole numbers.

### Example

```javascript
let big = 123456789012345678901234567890n;

console.log(big);
```

---

# Non-Primitive Data Types

Non-Primitive data types store **collections of values or complex data**.

## Features

- Stores multiple values
- Mutable (can be changed)
- Stored by reference

Common Non-Primitive Data Types:

1. Object
2. Array
3. Function
4. Date
5. RegExp (Regular Expression)

---

## 1. Object

Stores data as **key-value pairs**.

### Example

```javascript
let student = {
    name: "Chandra",
    age: 21
};

console.log(student.name);
```

---

## 2. Array

Stores multiple values in one variable.

### Example

```javascript
let numbers = [10, 20, 30, 40];

console.log(numbers);
```

Arrays can store different data types.

```javascript
let data = [1, "Hello", true];

console.log(data);
```

---

## 3. Function

A reusable block of code.

### Example

```javascript
function greet(name) {
    return "Hello " + name;
}

console.log(greet("Ajay"));
```

---

## 4. Date Object

Used to work with dates and times.

### Example

```javascript
let today = new Date();

console.log(today);
```

---

## 5. RegExp (Regular Expression)

Used to search or match text patterns.

### Example

```javascript
let pattern = /hello/;

console.log(pattern.test("hello world"));
```
