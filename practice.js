// ==========================================
// JavaScript Practice Problems (1 - 9)
// ==========================================

// 1. Loop to print numbers from 1 to 10
console.log("--- 1. Loop 1 to 10 ---");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2. Function to sum an array of numbers
console.log("\n--- 2. Sum of Array ---");
function sumArray(numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log("Sum:", sumArray([1, 2, 3, 4, 5])); // 15

// 3. Function to find the largest number in an array
console.log("\n--- 3. Largest Number ---");
function findLargest(numbers) {
  return Math.max(...numbers);
}
console.log("Largest:", findLargest([10, 45, 2, 99, 34])); // 99

// 4. Function to check if a number is even or odd
console.log("\n--- 4. Even or Odd ---");
function checkEvenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}
console.log("7 is:", checkEvenOrOdd(7)); // Odd
console.log("8 is:", checkEvenOrOdd(8)); // Even

// 5. Function to reverse a given string
console.log("\n--- 5. Reverse String ---");
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log("Reverse of 'javascript':", reverseString("javascript")); // tpircsavaj

// 6. Merge two arrays using the spread operator
console.log("\n--- 6. Merge Arrays with Spread ---");
const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b];
console.log("Merged:", merged); // [1, 2, 3, 4]

// 7. ES6 filter to return even numbers
console.log("\n--- 7. Filter Even Numbers ---");
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log("Even numbers:", evenNumbers); // [2, 4, 6]

// 8. Rewrite using template literals
console.log("\n--- 8. Template Literals ---");
const name = "Alice";
const msg = `Hello ${name}, welcome!`;
console.log(msg); // Hello Alice, welcome!

// 9. Rewrite using an arrow function
console.log("\n--- 9. Arrow Function ---");
const greet = (name) => `Hello, ${name}`;
console.log(greet("Alice")); // Hello, Alice
