let line = "----------------------------------------------------"
let subjects = Array(6) //specify length
let grades = new Array(20,40,35,12,37,100)

let numbers = [20,40,35,12,37,100]
//Create sub-array
subNumbers = numbers.slice(2,4)
console.log(subNumbers)
subNumbers2 = numbers.slice(4,6)
console.log(subNumbers2)
console.log(line)

numbers[1] //access the value
console.log(numbers[2])
numbers[2] = 25
console.log(numbers[2])
console.log(numbers.length)
console.log(numbers)
numbers.push(250) // adds numbers
console.log(numbers)
numbers.pop() // deletes the last element
numbers.unshift(1985) //adds element at the beggining
console.log(numbers)
console.log(line)

console.log(numbers.indexOf(37)) //Get index in the array of an element
//check if a number is in array
console.log(numbers.includes(38))
console.log(line)

var sum = 0
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
    sum = sum + numbers[i]
}
console.log(sum)

// Create number formatter.
var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

formatter.format(2500); /* $2,500.00 */
console.log(formatter.format(sum))
console.log(line)

//Reduce Filter map
let total = numbers.reduce((sum,mark)=>sum+mark,0)
console.log(total)
console.log(line)

//Create new array with even numbers of score array [12,14,16]
var scores = [12,13,14,16]
var evenScores = []

for (let i = 0; i < scores.length; i++) {
    if (scores[i] %2 == 0) {
        evenScores.push(scores[i])
    }
}
console.log(evenScores)
console.log(line)
let newFilterEvenScores = scores.filter(score=>score%2==0)
console.log(newFilterEvenScores)
console.log(line)

//Map function
//Create new array with even numbers of score array [12,14,16] and multiply by 3 => [36,42,48]
let mappedArray = newFilterEvenScores.map(score=>score*3)
console.log(mappedArray)
console.log(line)

let totalVal = mappedArray.reduce((sum,val)=>sum+val,0)
console.log(totalVal)
console.log(line)

let sumValues = scores.filter(score=>score%2==0).map(score=>score*3).reduce((sum,val)=>sum+val,0)
console.log(sumValues)
console.log(line)

//SORTING
let fruits = ["Banana", "Orange", "Apple", "Mango"]
console.log(fruits.sort())
console.log(fruits.reverse())
console.log(fruits.reverse())

var scores1 = [12,003,14,16]
scores1.sort((a,b)=>a-b)
console.log(scores1)

console.log(line)