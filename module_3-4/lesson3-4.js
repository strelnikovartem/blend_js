//TODO: № 1  ============================================================
//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив
// const numbers = [2, 5, 35, 56, 12, 1, 7, 80, 3];

// const numbers = [2, 5, 35, 56, 12, 1, 7, 80, 3];
// function findSmallerNumber(numbers) {
//   // return Math.min(...numbers);
//   if (!Array.isArray(numbers)) {
//     return "Hello Vova - це не масив";
//   }
//   let numberMin = numbers[0];
//   for (const number of numbers) {
//     if (numberMin > number) {
//       numberMin = number;
//     }
//   }
//   return numberMin;
// }

// console.log(findSmallerNumber(numbers));

//TODO: № 2 =============================================================
//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.

// function calculateAverage(...args) {
//   let total = 0;
//   let counter = 0;
//   for (const number of args) {
//     if (typeof number !== "number") {
//       continue
//     }
//     total += number;
//     counter++;
//   }
//   return total / counter;
// }

// console.log(calculateAverage(10, 10, 20, 200, "hello"));

//TODO: № 4 ==============================================================
// напиши функцію яка сумуватиме сусідні числа і пушити в новий масив
//  const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// function sumNeighborNumbers (array) {
//     const newArray = [];

// for (let i = 0; i < array.length - 1; i++) {
//     newArray.push(array[i] + array[i + 1]);

// }

//     return newArray;
// }

// console.log(sumNeighborNumbers(someArr))

//TODO: № 5 ==============================================================
//Напишіть функцію logItems(array), яка приймає
//масив та використовує цикл for, який для кожного
//елемента масиву виводитиме повідомлення у форматі

//<номер елемента> - <значення елемента>

//Нумерація елементів має починатися з першого.
// const array = ["Джаз", "Блюз", "Рок-н-рол", "Реггі", "Реп"];

// function logItems(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(`${i + 1} - ${array[i]}`);
//   }
// }
// logItems(array);
//TODO: № 8 ================================================================
// Потрібно написати функцію, яка приймає 2 параметри key та obj,
// яка буде перебирати об'єкт
// Якщо у об'єкта є такий ключ - поверне true

// const obj = {
//   name: "Igor",
//   car: "Mercedes",
//   carColor: "black",
// };

// function pullGet(key, obj) {

//   return Object.keys(obj).includes(key)
// }
// console.log(pullGet("car", obj));

//TODO: № 9 ==============================================================
// Створіть функцію multiplyNumeric(obj),
// яка множить всі числові властивості об'єкта obj на 2
// треба повертати об'єкт

// const menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// function multiplyNumeric(obj) {
//   for (const key in obj) {
//     if (typeof obj[key] === "number") {
//       obj[key] *= 2;
//     }
//   }
//   return obj;
// }

// console.log(multiplyNumeric(menu));

//TODO: № 10 ==============================================================
// Напиши функцію яка приймає массив чисел і повертає новий массив,
// унікальних чисел

// const numbers = [1, 1, 1, 2, 3, 4, 7, 7, 6, 6, 5, 4, 23, 22, 22, 111, 1, 5];

// function getUniqueNumbers(numbers) {
//     const uniqueSet = new Set(numbers);
//     return [...uniqueSet];
// }

// console.log(getUniqueNumbers(numbers));

// function getUniqueNumbers(numbers) {
//   const uniqueNumbers = [];
//   for (const number of numbers) {
//     uniqueNumbers[number] = number;
//   }
//   return Object.values(uniqueNumbers);
// }

// console.log(getUniqueNumbers(numbers));

//TODO: № 3  ============================================================
// Напишіть функцію min(a,b), яка повертає менше чисело з a і b.
//TODO: № 6 ==============================================================
// Напиши скрипт, який для об'єкта user,
// Послідовно:
// 1. додати поле mood зі значенням 'happy'
// 2. замінити hobby на 'skydiving'
// 3. замінити значення premium на false
// 4. виводити зміст об'єкта user у форматі
// ключ:значення використовуючи Object.keys() і for...of

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };
//TODO: № 7 ==============================================================
// В нас є объект, в якому зберігаються зарплатні
// нашої команди
// Напишіть код для підсумовання всіх зарплат і
// Збережіть його результат в перемінну sum.
// Якщо объект salaries пустий, тоді результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };
