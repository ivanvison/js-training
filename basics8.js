/*Inheritance is the main pillar in OOP.
One class can inherit/acquire the properties, methods of another class.
The class which inherits the properties of another is known as subclass (derived class, child class).
The class whose properties are inherited is known as Super Class*/

const Person = require("./basics7");

class Pet extends Person {
    
    get location() {
        return "BlueCross"
    }

    constructor(firstName, lastName) {
        // Call parent class constructor
        super(firstName, lastName)
    }

}
let pet = new Pet("Pila", "Patina")
console.log(pet.fullName())
console.log(pet.location)