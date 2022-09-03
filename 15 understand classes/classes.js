//classes are blueprint of object

class iAmPerson {
    name = "Abhi"  //property
    call = () => {  //method
        //write here
    }
}

//explore 1.construction functio
//2. inheritance


class Human {
    constructor() {
        this.gender = "male"
    }
    printGender() {
        console.log(this.gender)
    }
}

class Person {
    constructor() {
        this.name = "Abhi"
    }
    myName() {
        console.log(this.name)
    }
}
const person = new Person()
const human =  new Human()
person.myName()   //Abhi will be printed
human.printGender()// it will print gender
