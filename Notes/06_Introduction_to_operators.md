# JavaScript Operators

## What are Operators?

**Definition:**

Operators are **special symbols or keywords** that perform operations on values or variables and produce a result.

In simple words:

> Operators tell JavaScript what action to perform.

### Syntax

```javascript
operand1 operator operand2
```

### Example

```javascript
let a = 10;
let b = 5;

console.log(a + b);
```

**Output**

```
15
```

Here:

- `10` and `5` are **operands**.
- `+` is the **operator**.
- The result is `15`.

---
# Types of JavaScript Operators

JavaScript has the following operator types:

1. Arithmetic Operators
2. Assignment Operators
3. Comparison Operators
4. Logical Operators
5. Bitwise Operators
6. Ternary Operator
7. Comma Operator
8. Unary Operators
9. Relational Operators
10. BigInt Operators
11. String Operators
12. Optional Chaining Operator

---

# 5. Bitwise Operators

## Definition

Bitwise operators perform operations on the binary representation of numbers.

### Operators

| Operator | Description |
|----------|-------------|
| & | AND |
| \| | OR |
| ^ | XOR |
| ~ | NOT |
| << | Left Shift |
| >> | Right Shift |
| >>> | Unsigned Right Shift |

### Example

```javascript
console.log(5 & 1);
console.log(5 | 1);
console.log(5 ^ 1);
```

**Output**

```
1
5
4
```

### Real-world Example

Used in encryption, networking, graphics programming, and system-level programming.

---

# 6. Ternary Operator

## Definition

The ternary operator is a short form of an `if...else` statement.

### Syntax

```javascript
condition ? value1 : value2;
```

### Example

```javascript
let age = 18;

let status = age >= 18 ? "Adult" : "Minor";

console.log(status);
```

**Output**

```
Adult
```

### Real-world Example

```javascript
let marks = 80;

let result = marks >= 50 ? "Pass" : "Fail";

console.log(result);
```

---

# 7. Comma Operator

## Definition

The comma operator evaluates multiple expressions from left to right and returns the value of the last expression.

### Example

```javascript
let a, b;

let result = (a = 5, b = 10, a + b);

console.log(result);
```

**Output**

```
15
```

### Real-world Example

Mostly used in `for` loops.

---

# 8. Unary Operators

## Definition

Unary operators work with only one operand.

### Operators

| Operator | Description |
|----------|-------------|
| + | Convert to Number |
| - | Negative Value |
| ++ | Increment |
| -- | Decrement |
| ! | Logical NOT |
| typeof | Returns Data Type |
| delete | Removes Object Property |

### Example

```javascript
let x = "10";

console.log(+x);
console.log(typeof x);

x++;

console.log(x);
```

**Output**

```
10
string
11
```

### Real-world Example

```javascript
let visitors = 100;

visitors++;

console.log(visitors);
```

---

# 9. Relational Operators

## Definition

Relational operators check relationships between objects.

### Operators

| Operator | Description |
|----------|-------------|
| in | Checks if a property exists |
| instanceof | Checks object type |

### Example

```javascript
let student = {
  name: "Rahul"
};

console.log("name" in student);
console.log([] instanceof Array);
```

**Output**

```
true
true
```

### Real-world Example

Checking whether a user object contains an email property.

---

# 10. BigInt Operators

## Definition

BigInt operators allow calculations with very large integers beyond JavaScript's safe integer limit.

### Example

```javascript
let big1 = 999999999999999999999n;
let big2 = 1n;

console.log(big1 + big2);
```

**Output**

```
1000000000000000000000n
```

### Real-world Example

Used in banking systems, cryptocurrency, and scientific calculations.

---

# 11. String Operators

## Definition

String operators combine strings together.

### Operators

| Operator | Description |
|----------|-------------|
| + | Concatenate Strings |
| += | Append String |

### Example

```javascript
let firstName = "Chandra";
let lastName = "Lega";

console.log(firstName + " " + lastName);
```

**Output**

```
Chandra Lega
```

### Real-world Example

Displaying a user's full name.

---

# 12. Optional Chaining Operator (?.)

## Definition

The optional chaining operator (`?.`) safely accesses nested object properties.

If a property doesn't exist, it returns `undefined` instead of throwing an error.

### Syntax

```javascript
object?.property
```

### Example

```javascript
let student = {
  name: "Aman",
  address: {
    city: "Delhi"
  }
};

console.log(student.address?.city);
console.log(student.contact?.phone);
```

**Output**

```
Delhi
undefined
```

### Real-world Example

```javascript
let user = {
  name: "John"
};

console.log(user.address?.city);
```

Instead of throwing an error, JavaScript returns:

```
undefined
```

---
