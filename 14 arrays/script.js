console.log("Hello, JavaScript !!") // Вывод на консоль

const arr = ["Мурзик", "Кот","Барсик", "Рамзес", "Мурка", "Эдуард"]
/*
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}


for (j in arr){
    console.log(arr[j])
}
*/
//sort map filter

const arr2 = arr
                .map( elem => {
                    elem.length
                })
                .filter(elem => elem<6)
                .sort()
console.log(arr2)

const arr3 = arr.filter( elem => elem.length<6 )
console.log(arr3)

console.log(arr.sort())
