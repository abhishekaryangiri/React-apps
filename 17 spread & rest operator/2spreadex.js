
//spread examples
const  numbers = [1,2,3];
const newNum = [...numbers, 4,5]
console.log(newNum)


//for object
const person = {
    name: "abhi"
};
const newPerson = {
    ...person,
    age: 28
}
console.log(newPerson);




//rest operator
//for args
const filter = (...args) => {
    return args.filter(el => el ===2) //====check type and value eqality
}

console.log(filter(1,2,3))