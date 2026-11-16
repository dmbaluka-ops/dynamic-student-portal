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
// ---------- Lab 8: student list ----------

// 1. An array of student names (placeholder data for now)
const students = ["Amina", "Brian", "Chloe", "David", "Esther"];

// 2. Adds ONE student to the page
function addStudentToPage(name) {
  const list = document.getElementById("student-list");
  const item = document.createElement("li");
  item.textContent = name;
  list.appendChild(item);
}

// 3. Adds ALL students, clearing the list first
function displayAllStudents(studentArray) {
  const list = document.getElementById("student-list");
  list.innerHTML = "";

  for (let i = 0; i < studentArray.length; i++) {
    addStudentToPage(studentArray[i]);
  }
}

// 4. Run it when the button is clicked
const showButton = document.getElementById("show-students");
showButton.addEventListener("click", function () {
  displayAllStudents(students);
});