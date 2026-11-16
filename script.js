// 1. Welcome message
alert("Welcome to the Dynamic Student Portal!");
console.log("Portal loaded successfully.");

// 2. Variables and a conditional
const studentName = "Amina";
let yearOfStudy = 2;

if (yearOfStudy === 1) {
  console.log(studentName + " is a first-year student. Welcome!");
} else if (yearOfStudy === 2) {
  console.log(studentName + " is a second-year student.");
} else {
  console.log(studentName + " is a senior student.");
}

// 3. A for loop
for (let i = 1; i <= 5; i++) {
  console.log("Count: " + i);
}