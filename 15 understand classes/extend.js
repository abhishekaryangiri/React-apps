//here we are using super constructor


class Human {
    constructor() {
        this.gender = "male"
    }
    printGender() {
        console.log(this.gender)
    }
}

class Person extends Human {
    constructor() {
        super()
        this.name = "Abhi"
        this.gender = "female"
    }
    printmyName() {
        console.log(this.name)
    }
}
const person = new Person()
// const human =  new Human()
person.printmyName()   //Abhi will be printed
person.printGender()// it will print gender