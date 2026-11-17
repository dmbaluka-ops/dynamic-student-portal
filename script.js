
alert("Welcome to the Dynamic Student Portal!");
console.log("Portal loaded successfully.");


const studentName = "Amina";
let yearOfStudy = 2;

if (yearOfStudy === 1) {
  console.log(studentName + " is a first-year student. Welcome!");
} else if (yearOfStudy === 2) {
  console.log(studentName + " is a second-year student.");
} else {
  console.log(studentName + " is a senior student.");
}


for (let i = 1; i <= 5; i++) {
  console.log("Count: " + i);
}



class Student {
  constructor(name, email, course) {
    this.name = name;
    this.email = email;
    this.course = course;
  }

  getSummary() {
    return this.name + " (" + this.email + ") is studying " + this.course;
  }
}

// Quick test: open the console to see the result
const testStudent = new Student("Amina Yusuf", "amina@example.com", "Computer Science");
console.log(testStudent.getSummary());



// Adds ONE student object to the page
function addStudentToPage(student) {
  const list = document.getElementById("student-list");
  const item = document.createElement("li");
  item.textContent = student.getSummary();
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


async function loadStudents() {
  const message = document.getElementById("status-message");
  message.textContent = "Loading...";

  try {
    const response = await fetch("students.json");

    if (!response.ok) {
      throw new Error("Server replied with status " + response.status);
    }

    const data = await response.json();
    const students = data.map(function (s) {
      return new Student(s.name, s.email, s.course);
    });

    message.textContent = "";
    displayAllStudents(students);
  } catch (error) {
    message.textContent = "Sorry, the student list could not be loaded.";
    console.error("Fetch failed:", error);
  }
}


document.getElementById("show-students").addEventListener("click", loadStudents);