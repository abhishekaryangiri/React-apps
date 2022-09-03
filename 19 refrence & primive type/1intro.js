

const number = 10;
const num2 = number;

console.log(num2)




//obj
const person = {
    name: "Abhi"
};
const secPerson =person;
person.name = "Aryan"
console.log(secPerson)


//using spreas operator
//obj
const people = {
    peopleCalled: "Abhi"
};
const otherPeople = {
    ...people
};
people.peopleCalled = "Aryan";
console.log(otherPeople);