console.log("Hello, JavaScript !!") // Вывод на консоль

function isSimple(N){

    let divider = 1

    do {
        divider++
        if (N % divider == 0){
            return divider
        }    
    } while ( divider<=N/2 )
    
    return 0
}

function printSimple(Num){
    const result = isSimple(Num)
    return result == 0
                ? `Число ${Num} является простым`
                : `Число ${Num} не является простым, делится на ${result}`
}

console.log(printSimple(121))
console.log(printSimple(345))
console.log(printSimple(347))