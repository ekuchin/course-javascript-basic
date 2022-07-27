console.log("Hello, JavaScript !!") // Вывод на консоль

const monthNumber = 11

let monthName
let seasonName

switch (monthNumber){
    case 1:
        monthName = "Январь"
        break
    case 2:
        monthName = "Февраль"
        break
    case 3:
        monthName = "Март"
        break
    case 4:
        monthName = "Апрель"
        break
    case 5:
        monthName = "Май"
        break
    case 6:
        monthName = "Июнь"
        break
    case 7:
        monthName = "Июль"
        break
    case 8:
        monthName = "Август"
        break
    case 9:
        monthName = "Сентябрь"
        break
    case 10:
        monthName = "Октябрь"
        break
    case 11:
        monthName = "Ноябрь"
        break
    case 12:
        monthName = "Декабрь"
        break
    default:
        monthName = "Неизвестный"
}

switch (monthNumber){
    case 1,2,12:
        seasonName = "зимний"
        break
    case 3,4,5:
        seasonName = "весенний"
        break
    case 6,7,8:
        seasonName = "летний"
        break
    case 9, 10, 11:
        seasonName = "осенний"
        break
    default:
        seasonName = "неизвестный"
        break
}


console.log(`${monthName} - это ${seasonName} месяц`)