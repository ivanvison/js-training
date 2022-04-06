//CREATING A CLASS
module.exports = class Person {
    age = 25
    get location() { //properties
        return "Canada"
    }

    //Costructor is a method which execute by default when you create object of the class
    constructor(firstName,lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }
    //methods
    fullName() {
        console.log(this.firstName+' '+this.lastName)
    }
}

/*let person = new Person("Rick", "Roll")
let person2 = new Person("King", "James")
console.log(person.age)
console.log(person.location)
console.log(person.firstName)
console.log(person.lastName)
console.log(person.fullName())
console.log(person2.fullName())*/


