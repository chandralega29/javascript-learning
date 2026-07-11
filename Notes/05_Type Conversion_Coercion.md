# Type Conversion and Type Coercion in JavaScript

## What is Type Conversion?

**Type Conversion** is the process of **manually converting one data type into another**.

It is also called **Explicit Type Casting**.

### Features

- Performed manually by the programmer.
- Uses built-in methods like `Number()`, `String()`, and `Boolean()`.
- Gives complete control over data types.

---

# Real-World Example

Imagine a registration form where a user enters their age.

```javascript
let age = "21";
```

Although the user entered **21**, JavaScript stores it as a **String**.

If you want to perform calculations, convert it into a Number.

```javascript
let age = "21";

let numAge = Number(age);

console.log(numAge);
console.log(typeof numAge);
```

**Output**

```text
21
number
```

---

# Types of Type Conversion

## 1. String → Number

Convert a string into a number using:

- `Number()`
- `parseInt()`
- `parseFloat()`

### Example

```javascript
let s = "123";

let n = Number(s);

console.log(n);
```

**Output**

```text
123
```

### Real-World Use

User enters age, salary, marks, or quantity in a form.

```javascript
let marks = "95";

let total = Number(marks) + 5;

console.log(total);
```

**Output**

```text
100
```

---

## 2. Number → String

Convert a number into a string using `String()`.

### Example

```javascript
let n = 123;

let s = String(n);

console.log(s);
console.log(typeof s);
```

**Output**

```text
123
string
```

### Real-World Use

Display order numbers, invoice numbers, or IDs on a webpage.

```javascript
let orderId = 101;

console.log("Order ID: " + String(orderId));
```

**Output**

```text
Order ID: 101
```

---

## 3. Boolean → Number

Convert boolean into a number using `Number()`.

- `true` → `1`
- `false` → `0`

### Example

```javascript
let bool = true;

console.log(Number(bool));
```

**Output**

```text
1
```

### Real-World Use

Convert attendance status into marks.

```javascript
let present = true;

let attendance = Number(present);

console.log(attendance);
```

**Output**

```text
1
```

---

## 4. Boolean → String

Convert boolean into a string using `String()`.

### Example

```javascript
let bool = false;

console.log(String(bool));
```

**Output**

```text
false
```

### Real-World Use

Display account status.

```javascript
let isActive = true;

console.log("Account Active: " + String(isActive));
```

**Output**

```text
Account Active: true
```

---

# What is Type Coercion?

**Type Coercion** is the **automatic conversion of one data type into another by JavaScript**.

It is also called **Implicit Type Casting**.

### Features

- Performed automatically by JavaScript.
- Happens during arithmetic and comparison operations.
- No manual conversion is required.

---

# Real-World Example

Suppose a shopping website receives quantity as a string.

```javascript
let quantity = "5";

let total = quantity * 100;

console.log(total);
```

**Output**

```text
500
```

JavaScript automatically converts `"5"` into `5`.

---

# Examples of Type Coercion

## 1. String + Number

When using the `+` operator, JavaScript converts the number into a string.

### Example

```javascript
let n = 5;
let s = "5";

let result = n + s;

console.log(result);
console.log(typeof result);
```

**Output**

```text
55
string
```

### Real-World Use

Displaying messages.

```javascript
let score = 95;

console.log("Your score is " + score);
```

**Output**

```text
Your score is 95
```

JavaScript automatically converts `95` into `"95"`.

---

## 2. String × Number

With `*`, JavaScript converts the string into a number.

### Example

```javascript
console.log("10" * 2);
```

**Output**

```text
20
```

### Real-World Use

Shopping cart calculation.

```javascript
let quantity = "3";
let price = 500;

console.log(quantity * price);
```

**Output**

```text
1500
```

---

## 3. Boolean + Number

JavaScript converts:

- `true` → `1`
- `false` → `0`

### Example

```javascript
console.log(true + 5);
```

**Output**

```text
6
```

### Real-World Use

Attendance calculation.

```javascript
let present = true;

let totalDays = present + 25;

console.log(totalDays);
```

**Output**

```text
26
```

---

## 4. Comparison of Different Data Types

JavaScript converts values into a common type when using `==`.

### Example

```javascript
let s = "10";
let n = 10;

console.log(s == n);
```

**Output**

```text
true
```

### Real-World Use

Comparing values entered in forms.

```javascript
let otp = "1234";

if (otp == 1234) {
    console.log("OTP Verified");
}
```

**Output**

```text
OTP Verified
```

---

## 5. Boolean Context

JavaScript converts values into `true` or `false` inside conditions.

### Example

```javascript
let name = "";

if (name) {
    console.log("Welcome");
} else {
    console.log("Please enter your name");
}
```

**Output**

```text
Please enter your name
```

### Real-World Use

Form validation.

```javascript
let password = "";

if (password) {
    console.log("Login Successful");
} else {
    console.log("Password Required");
}
```

---

# Falsy Values

These values become `false` in conditions.

```javascript
false
0
-0
""
null
undefined
NaN
```

---

# Truthy Values

These values become `true`.

```javascript
"Hello"
100
[]
{}
"0"
```

---

# Type Conversion vs Type Coercion

| Type Conversion | Type Coercion |
|-----------------|---------------|
| Manual conversion | Automatic conversion |
| Done by programmer | Done by JavaScript |
| Also called Explicit Type Casting | Also called Implicit Type Casting |
| Uses `Number()`, `String()`, `Boolean()` | Happens during operations |

---

# Interview Tips

- **Type Conversion** = You convert the data type.
- **Type Coercion** = JavaScript converts the data type automatically.
- Prefer using **`===`** instead of **`==`** because `===` checks both **value and data type** without automatic conversion.

### Example

```javascript
console.log("10" == 10);   // true
console.log("10" === 10);  // false
```