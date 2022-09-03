// const => for constant value
const printMyName = (name) => {
    // another method
    // const printMyName = name => {
    console.log(name)
}
printMyName('Abhi')



const PrintNameAge = (name, age) => {
    console.log(name, age);
};
PrintNameAge("abhi", 28)




const multiply = (number) => {
    return number*2
    //shortcut of line 19-20
    // const multiply = (number) => return number * 2;

}
console.log(multiply(8))






// var 
var myName = "Abhi";
console.log(myName)


myName ="Abhi"
console.log(myName)






// let => for variable values


// let is a block scope ***

// let variable can't re-define but we can re-assign value

// let is a block scope ***





//diff bw let and const
        // const MyName = "abhiA"
        let MyName = "abhiA"
        //here we are using const so, we will not reassign same thing
        //so for reassign we should use let variable

        console.log(MyName)

        MyName = "Aryan"
        console.log(MyName) //Aryyan
