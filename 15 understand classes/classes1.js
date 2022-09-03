//constructor function
class Country {
    constructor() {
        this.country = "India"
    }
    printCountry() {
        console.log(this.country)
    }
 
}

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
const country = new Country()
const human =  new Human()
const person = new Person()

person.myName()   //Abhi will be printed
human.printGender()// it will print gender
country.printCountry() //print->country name