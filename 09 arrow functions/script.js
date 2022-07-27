console.log("Hello, JavaScript !!") // Вывод на консоль

const isSimple = N => {
    let divider = 1
    do {
        divider++
        if (N % divider == 0){
            return divider
        }    
    } while ( divider<=N/2 )
    return 0
}

const printSimple = (Num, Func)=>{
    const result = Func(Num)
    return result == 0
                ? `Число ${Num} является простым`
                : `Число ${Num} не является простым, делится на ${result}`
}

const doubl = n => n*2
const pi = () => 3.14

console.log(printSimple(121, isSimple))
console.log(printSimple(345, isSimple))
console.log(printSimple(347, isSimple))

console.log(doubl(32))
console.log(pi())