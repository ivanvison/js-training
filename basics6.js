// Object is collection of properties

let person = {
    firstName: 'Rick',
    lastName: 'Roll',
    age: 34,
    fullName: function() {
        console.log(this.firstName+this.lastName)
    }
}
console.log(person.fullName())
console.log(person.firstName)
console.log(person['lastName'])

person.firstName = 'James'
console.log(person.firstName)

//Add property
person.gender = 'male'
console.log(person)
delete person.gender
console.log(person)

//Check if the property exist
console.log('gender' in person)

//Print values of all the properties - Enhaced for loop
for (let key in person) {
    console.log(person[key])
}