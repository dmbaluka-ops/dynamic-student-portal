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
// ---------- Lab 9: students loaded from JSON ----------

// Adds ONE student object to the page
function addStudentToPage(student) {
  const list = document.getElementById("student-list");
  const item = document.createElement("li");
  item.textContent = student.name + " - " + student.course + " (Year " + student.year + ")";
  list.appendChild(item);
}

// Adds ALL students and updates the heading count
function displayAllStudents(studentArray) {
  const list = document.getElementById("student-list");
  list.innerHTML = "";

  for (let i = 0; i < studentArray.length; i++) {
    addStudentToPage(studentArray[i]);
  }

  document.getElementById("student-heading").textContent =
    "Registered Students (" + studentArray.length + ")";
}

// Fetches the JSON, then displays it
async function loadStudents() {
  const message = document.getElementById("status-message");
  message.textContent = "Loading...";

  try {
    const response = await fetch("students.json");

    if (!response.ok) {
      throw new Error("Server replied with status " + response.status);
    }

    const students = await response.json();
    message.textContent = "";
    displayAllStudents(students);
  } catch (error) {
    message.textContent = "Sorry, the student list could not be loaded.";
    console.error("Fetch failed:", error);
  }
}

// Run it when the button is clicked
document.getElementById("show-students").addEventListener("click", loadStudents);