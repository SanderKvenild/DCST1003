// TODO: rename this file

let personList = document.getElementById("personList");
let nameInput = document.getElementById("nameInput");
let ageInput = document.getElementById("ageInput");
let addButton = document.getElementById("addButton")

let persons = [
    {name: "Kari", city: "Trondheim", age: 30}, 
    {name: "Ola", city: "Bergen", age: 25}
];
updatePersonList();

function updatePersonList() {
    while (personList.firstChild) {
        personList.removeChild(personList.firstChild)
    }
    personList.delete = ""
    //for (let person of persons) {
    for (let i = 0; i < persons.length; i++) {
        let li = document.createElement("li");
        li.innerText = persons[i].name + ", " + persons[i].age + " ";

        let button = document.createElement("button");
        button.innerText = "x";
        button.onclick = () => {
            persons.splice(i, 1);
            updatePersonList();
        }

        li.appendChild(button);

        personList.appendChild(li);
    };
}

addButton.onclick = () => {
    persons.push({name: nameInput.value, age: ageInput.value})
    updatePersonList();
}