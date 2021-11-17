// ---------
// OPPGAVE 1
// ---------

// Empty lines to separate tasks
console.log('\nOppgave 1\n\n')

let v = [1, 2, 3];

console.log(
    'add 2 to each element of v:',
    v.map((e) => e + 2)
);

console.log(
    'multiply each element of v by 2:',
    v.map((e) => e * 2)
);

console.log(
    'sum of v:',
    v.reduce((n, e) => n + e)
);

console.log(
    'mean of v:',
    v.reduce((n, e) => n + e) / v.length
);

console.log(
    'each element of v as a string:',
    v.map((e) => e.toString())
);

console.log(
    'v as a string:',
    v.map((e, i) => 'v[' + i + '] = ' + e).join(', ')
)

// ---------
// OPPGAVE 2
// ---------

// Empty lines to separate tasks
console.log('\nOppgave 2\n\n')

let students = [
    { name: 'Ola', grade: 'A' },
    { name: 'Kari', grade: 'C' },
    { name: 'Knut', grade: 'C' },
];

console.log(
    'students-elements as strings:',
    students.map((e) => e.name + " got " + e.grade)
);

console.log(
    'Kari got:',
    students.find((e) => e.name == 'Kari').grade
);

console.log(
    'Did everyone get C:',
    students.every((e) => e.grade == 'C') ? 'Yes' : 'No'
);

console.log(
    'How many got C:',
    students.filter((e) => e.grade == 'C').length
)

console.log(
    'Percentage of C grades:',
    students.filter((e) => e.grade == 'C').length * 100 / students.length
);

console.log(
    'Did anyone get A:',
    students.some((e) => e.grade == 'A') ? 'Yes' : 'No'
);

console.log(
    'Did anyone get F:',
    students.some((e) => e.grade == 'F') ? 'Yes' : 'No'
);