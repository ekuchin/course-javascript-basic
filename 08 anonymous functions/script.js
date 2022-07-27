console.log("Hello, JavaScript !!") // Вывод на консоль

const isSimple = function(N){
    let divider = 1
    do {
        divider++
        if (N % divider == 0){
            return divider
        }    
    } while ( divider<=N/2 )
    return 0
}

const printSimple = function(Num, Func){
    const result = Func(Num)
    return result == 0
                ? `Число ${Num} является простым`
                : `Число ${Num} не является простым, делится на ${result}`
}

console.log(printSimple(121, isSimple))
console.log(printSimple(345, isSimple))
console.log(printSimple(347, isSimple))