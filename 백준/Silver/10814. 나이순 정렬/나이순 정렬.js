const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map(el => el.split(" "));

const n = parseInt(input[0][0]);
let people = [];
let person;
let result = "";

for(let i = 1 ; i <= n ; i++) {
    person = {};
    person.age = parseInt(input[i][0]);
    person.name = input[i][1];
    people.push(person);
}

people.sort((a,b) => a.age - b.age);

for(let i = 0 ; i < n ; i++) {
    result += people[i].age + " " + people[i].name + "\n";
}
console.log(result);