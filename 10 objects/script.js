console.log("Hello, JavaScript !!") // Вывод на консоль

let cat = {
    name:"Мурзик",
    weight:10,
    isAngry:true,
    tail:{
        length:5,
        furness:34
    }
}

console.log(cat)
console.log(cat.tail.length)

const propName = "breed"

console.log(cat["breed"])
console.log(propName in cat)

cat.breed="Манул"
console.log(cat)
console.log("breed" in cat)


console.log(cat[propName])

for (prop in cat){
    console.log(prop)
    console.log(cat[prop])
}