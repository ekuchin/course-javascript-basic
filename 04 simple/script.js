console.log("Hello, JavaScript !!") // Вывод на консоль

const N = 121

let isSimple = true
let divider = 1

do {
    divider++
    if (N % divider == 0){
        isSimple = false
    }    
} while ( isSimple && divider<=N/2 )

const res = isSimple
            ? `Число ${N} является простым`
            : `Число ${N} не является простым, делится на ${divider}`

console.log(res)