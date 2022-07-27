console.log("Hello, JavaScript !!") // Вывод на консоль

let preprev = 1
let prev = 1
let current;

const N = 45

let res = "1, 1, "

for(let i = 3 ; i<=N ; i++){
    
    current = prev + preprev
    res += current+", "
    preprev = prev
    prev = current
}

console.log(res)