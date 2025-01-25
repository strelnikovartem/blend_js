// TODO: № 1 на if...else ===============================================
// Якщо змінна a дорівнює 10, виведіть 'Вірно', інакше виведіть 'Невірно'.
//const a = 8;
// if (a === 10) {
//   console.log("Вірно");
// } else {
//   console.log("Невірно");
// }

//TODO: № 2 на тернарник =============================================
// Якщо змінна a дорівнює 10, виведіть 'Вірно', інакше виведіть 'Невірно' через тернарник

//console.log(a === 10 ? "Вірно" : "Невірно");

//TODO: № 3 на if...else if ===============================================
// У змінній min лежить число від 0 до 59. Визначте у котру чверть години
// Попадає це число (у першу, другу, третю або четверту).

// let min = 60;

// if (min >= 0 && min < 15) {
//     console.log("Перша чверть години");
// } else if (min >= 15 && min < 30) {
//     console.log("Друга чверть години");
// } else if (min >= 30 && min < 45) {
//     console.log("Третя чверть години");
// } else if (min >= 45 && min < 60) {
//     console.log("Четверта чверть години");
// } else {
//     console.log("Введене неправильне значення");
// }:)

//TODO: № 4 на switch ===========================================
// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
//  '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.

// const num = 5;
// let result = "";
// switch (num) {
//     case 1:
//         result = "Зима";
//         break;
//     case 2:
//         result = "Весна";
//         break;
//     case 3:
//         result = "Літо";
//         break;
//     case 4:
//         result = "Осінь";
//         break;

//     default:
//         result = "Error"
//         break;
// }
// console.log(result);

// TODO: № 5 на for =====================================================
//Напишіть цикл, який виводить у консоль
// числа від max до min за спаданням
// Додайте усі парні числа від min до max

// const min = 0;
// const max = 10;
// let total = 0;
// for (let i = max; i >= min; i-=1) {
//     if (i % 2 === 0) {
//         total += i;
//         console.log(i);
//     }

// }
// console.log(total);

//TODO: № 6  =========================================================
// Напишіть if..else, що відповідає наступному switch:
// const browser = "Opera"
// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }
// const browser = "Edge";
// if (browser === "Edge") {
//   alert("You've got the Edge!");
// } else if (
//   browser === "Chrome" ||
//   browser === "Firefox" ||
//   browser === "Safari" ||
//   browser === "Opera"
// ) {
//   alert("Okay we support these browsers too");
// } else {
//   alert("We hope that this page looks ok!");
// }

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

const numbers = [1, 1, 1, 2, 3, 4, 7, 7, 6, 6, 5, 4, 23, 22, 22, 111, 1, 5];

function getUniqueNumbers(numbers) {
    const uniqueSet = new Set(numbers);
    return [...uniqueSet];
}

console.log(getUniqueNumbers(numbers));