const flag = true

if (flag) {
    console.log("Flag is true")
}
else {
    console.log("Flag is False")
}
console.log("------------")
//LOOPS
let i = 0
while(i > 10) {
    i++
    console.log(i)
}

do {
    i++
    console.log(i)
}while(i<10);
console.log("------------")
//FOR LOOP
for(let k = 0; k <= 10; k++) {
    console.log(k)
}
console.log("------------")
//get multiple
//from 1-10 give me common multiple values of 2 and 5
//opperators && || ==
let n = 0
for(let k = 1; k <= 100; k++) {
    if (k%2 == 0 && k%5 == 0) {
        n++
        console.log(k)
        if (n == 3) {
            break
        }
    }
}