console.log("Hello, JavaScript !!") // Вывод на консоль

class Cat{
    constructor(name, breed, color, hungerThreshold){
        this.name = name;
        this.breed = breed;
        this.color = color;
        this.hungerThreshold = hungerThreshold;
        this.isAngry = false
    }

    eat(foodQantity){
        let desc = `${this.color} ${this.breed} ${this.name} `
        desc += this.hungerThreshold < foodQantity
                    ? "наелся и идет спать."
                    : "голоден, недоволен и царапет миску."
        console.log(desc)
    }
}

let manul = new Cat("Мурзик", "манул", "Серый", 10);
let mainecoon = new Cat("Барсик", "мейн-кун", "Рыжий", 5);
let sphynx = new Cat("Рамзес", "сфинкс", "Лысый", 2);

manul.eat(9)
mainecoon.eat(7)
sphynx.eat(1)

console.log(manul instanceof Cat)
console.log(manul)

Cat.prototype.sayMeow = function(){
    console.log(`${this.name} говорит: Мяу !!`)
}

manul.sayMeow()
mainecoon.sayMeow()
