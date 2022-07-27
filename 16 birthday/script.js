console.log("Hello, JavaScript !!") // Вывод на консоль

const today = new Date();
const birthday = new Date(1978,10,14);
let nextBirthday = new Date(1978,10,14);

const diffTime = Math.abs(today - birthday);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

const nextDays = (Math.floor(diffDays / 1000)+1)*1000

nextBirthday.setDate(nextBirthday.getDate()+nextDays)

console.log(`Возраст: ${diffDays} дней.`);
console.log(`${nextBirthday.toLocaleDateString()} можно отметить ${nextDays} дней`)