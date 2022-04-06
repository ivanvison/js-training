const Person = require('./basics7')
let line = "----------------------------------------------------"
//Strings and methods
let day = "Monday "
console.log(day.length) //7
console.log(line)

let subDay = day.slice(0,4)
console.log(subDay)
console.log(day[3].toUpperCase())
console.log(line)

//tue day
let splitDay = day.split("n")
console.log(splitDay[1].length)
console.log(splitDay[1].trim().length)
console.log(line)

//Convert string to number
let date = '23'
let nextDate = '27'
let difference = parseInt(nextDate) - parseInt(date)
console.log(difference)
difference.toString()
console.log(line)

//Concat
let newQuote = day+ "is funday"
console.log(newQuote)

let count = 0
let value = newQuote.indexOf("day") //The second value will trigger the second day
console.log(value)
while(value !== -1) {
    count++
    value = newQuote.indexOf("day",value+1)
}
console.log(count)
console.log(line)

let person = new Person("Ivan", "Vison")
console.log(person.fullName())