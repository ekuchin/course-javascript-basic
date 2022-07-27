console.log("Hello, JavaScript !!") // Вывод на консоль
class Animal {
    constructor(name) {
      this.name = name;
      this.hasTail = true;
    }
    say() {
      console.log("Привет !");
    }
  }
  
  class Cat extends Animal {
    constructor(name, breed) {
      super(name);
      this.breed = breed;
    }
    say() {
      console.log("Мяу!");
    }
  }
  
  class Horse extends Animal {
    constructor(name) {
      super(name);
    }
    static move() {
      console.log("Топ-топ !");
    }
  }
  
  let murzik = new Cat("Мурзик");
  let burushka = new Horse("Бурушка");
  
  murzik.say();
  burushka.say();
  Horse.move();
  