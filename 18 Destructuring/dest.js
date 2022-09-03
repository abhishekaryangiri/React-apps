//Destructing=> easily extract array elements or object properties and store them in variables
//for array and objects
//array-->
[a,b] = ['Hello', 'Max'] 
console.log(a) //hello
console.log(b)  //max


//obj dest..-->
const {myName} = {myName:"Abhi", age:28};
console.log(myName);
// console.log(age); //Undefined



//examples

const numbers =[1,2,3,4];
[num1, , ,num2] = numbers; //here "," moves over the element
console.log(num1, num2);