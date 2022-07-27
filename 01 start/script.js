console.log("Hello, JavaScript !!") // Вывод на консоль


let x = 1;
let y = 2;
console.log( "x" + x + "y" + y);
let z = x
x = y;
y = z;
console.log( "x" + x + "y" + y);


let nam = "Eugene"
console.log(`Hello, ${nam}`)

let theNum = 12345
let theStr = String(theNum)

console.log(theNum)
console.log(theStr)

console.log(theNum+theStr)

console.log(140 % 12)

let counter = 1;
let a = ++counter;
console.log("A: "+a); // 2
console.log("Counter: "+counter)

a += 10
console.log("A: "+a); // 2

a*=3
console.log("A: "+a); // 2

console.log(theNum == theStr)
console.log(theNum === theStr)

