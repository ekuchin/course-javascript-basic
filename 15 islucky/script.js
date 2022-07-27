console.log("Hello, JavaScript !!") // Вывод на консоль

function isLucky(n){
    let str = String(n).padStart(6, "0")
    const summ1 = Number(str[0])+Number(str[1])+Number(str[2])
    const summ2 = Number(str[3])+Number(str[4])+Number(str[5])
    return summ1 == summ2
}

let counter = 0
for (let i = 0; i < 1000000; i++) {
    if (isLucky(i)){
        counter++
    }
}

console.log(`Счастливых билетов в пачке ${counter} штук`)