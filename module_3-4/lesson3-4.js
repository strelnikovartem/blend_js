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
