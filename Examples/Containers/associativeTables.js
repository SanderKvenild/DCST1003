// Old way
let personNames = ["Kari", "Ola"];
let personCities = ["Trondheim", "Bergen"];
let personAges = [30, 25];

for(let i = 0; i < personNames.length && i < personCities.length && i < personAges.length; i++) {
    console.log(personNames[i] + " from " + personCities[i], " is " + personAges[i] + " years old.");
}


// Better way
let persons = [
    {name: "Kari", city: "Trondheim", age: 30}, 
    {name: "Ola", city: "Bergen", age: 25}
]

for (let person of persons) {
    console.log(person.name + " from " + person.city + " is " + person.age + " years old.");
}