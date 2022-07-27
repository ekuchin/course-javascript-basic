console.log("Hello, JavaScript !!") // Вывод на консоль

function fibonazzi(N){  
    return N<3 ? 1 : fibonazzi(N-1) + fibonazzi(N-2)
}

function factorial(N){
    return N == 1 ? 1 : N * factorial(N-1)
}

console.log(fibonazzi(25))
console.log(factorial(5))
