//block of code = function

function add(a,b) {
    return a+b
}

let sum = add(2,3)
console.log(sum)

//Anonymous functions
let sumOfIntegers = function(c,d) {
    return c+d
}
let sumOfNumbers = (c,d)=>c+d
console.log(sumOfNumbers(2,4))

//Var - Global level/Functional - scope in function if declared inside function
//Let scope global level or block level {}
//const - same as let, cannot be re-initialized
