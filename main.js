/*let year = prompt('year of brith')
let age = 2023 - Number(year)
console.log('ваш', age ,'!')

let a = 5
console.log(a)
a = 10
console.log(a)*/

console.log(5 > 10)
console.log(5 === 5)
console.log(10 - '5')
console.log(10 - true)
console.log(Boolean(0))
//Boolean только 0 будет  foulse
console.log(10 - Number(true))

//Первая задание 1
let num1 = prompt("Введите первое число:");
let num2 = prompt("Введите второе число:");

console.log(Number(num1) * Number(num2));

//Вторая задача 2
let december = 31;
let january = 31;
let february = 29;

console.log("Количиства дней зимой", (december + january + february));

//Третая задача 3
let hours8 = prompt("Введите вашу почасовую ставку:");
let weeks5 = prompt("Введите количество недель, которые вы проработали:");

let hours = Number(hours8);
let days = Number(weeks5);


console.log("Ваша заработная плата", (hours * 8) * (days * 5));




