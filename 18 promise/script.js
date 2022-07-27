console.log("Hello, JavaScript !!") // Вывод на консоль

const isHappy = Math.random()>=0.3

const catMood = new Promise(
    (resolve, reject) =>{
        if (isHappy){
            const meow = {
                text:"Мяу !",
                count: Math.trunc((Math.random()+0.1)*10)
            }
            resolve(meow)
        }
        else{
            const reason = new Error("Кот сердит")
            reject(reason)
        }
    }
)

catMood
    .then(result => {
        console.log(result.text.repeat(result.count))
    })
    .catch(error =>{
        console.log(error.message)
    })