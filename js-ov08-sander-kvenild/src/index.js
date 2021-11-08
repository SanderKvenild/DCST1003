import fs, { write } from 'fs';

let studentList = document.getElementById('studentList');
let students = [];

fs.readFile('src/data.json', (error, data) => {
  students = JSON.parse(data);

  for (let student of students) {
    displayStudent(student);
  }
});

// document elements
let newButton = document.getElementById('newStudent');
let newName = document.getElementById('name');
let newEmail = document.getElementById('email');

newButton.onclick = () => {
  students.push({ name: newName.value, email: newEmail.value });
  displayStudent(students.slice(-1)[0]);
  // TODO: add apropriate spaces
  writeData();
};

function displayStudent(student) {
  let li = document.createElement('li');
  let button = document.createElement('button');
  button.innerText = 'X';
  button.onclick = () => {
    const index = students.indexOf(student);
    console.log(index);
    students.splice(index, 1);
    studentList.removeChild(li);
    console.log(students);
    writeData();
  };
  li.innerText = student.name + ', ' + student.email + ' ';
  li.appendChild(button);
  studentList.appendChild(li);
}

function writeData() {
  console.log(students);
  fs.writeFile('src/data.json', JSON.stringify(students, null, 2), (error) => {
    if (error != null) {
      console.error(error.message);
      return;
    }
  });
}
