let v = [2, 4, 6];

console.log("each element of v added by 2:", v.map(e => e + 2));


console.log("each element of v multiplied by 3:", v.map(e => e * 3));
console.log("each element index of v added by 2:", v.map((_, i) => i + 2));
console.log("elements of v larger than 3:", v.filter(e => e > 3));
console.log("sum of element indexes of v:", v.reduce((sum, _, i) => sum + i, 0));

// -----

let grades = [
    { student: 'Ola', grade: 'C' },
    { student: 'Kari', grade: 'B' },
    { student: 'Knut', grade: 'B' },
];

console.log("Did any student get D:", grades.some(e => e.grade == 'D') ? "yes": "no");
console.log("Students that got B:", grades.filter(e => e.grade == 'B').map(e => e.student));
console.log("Ola's grade:", grades.find(e => e.student == 'Ola').grade);