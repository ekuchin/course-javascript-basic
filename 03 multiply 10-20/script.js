console.log("Hello, JavaScript !!") // Вывод на консоль

res = "    "
for(let j = 10 ; j<=20 ; j++){
    res+=j+"  "
}
console.log(res)

for(let i = 10 ; i<=20 ; i++){

    res = i+" "
    for(let j = 10 ; j<=20 ; j++){
        res+=i*j+" "
    }
    console.log(res)   
}