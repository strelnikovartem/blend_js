//TODO: № 1 ==============================================
// Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)

// const form = document.querySelector("#alertButton");
// const input = document.querySelector("#alertInput");

// form.addEventListener("click", () => {
//   console.log(input.value);
// });

//TODO: № 2 ==============================================
// Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
// Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.

// const button = document.querySelector("#swapButton");
// const inputFirst = document.querySelector("#leftSwapInput");
// const inputSecond = document.querySelector("#rightSwapInput");

// button.addEventListener("click", () => {
//   let otherValue = inputFirst.value;
//   inputFirst.value = inputSecond.value;
//   inputSecond.value = otherValue;
// });

//TODO: № 3 ==============================================
// При кліку на кнопку текст параграфів змінюється на їх порядковий номер

// const text = document.querySelectorAll(".article");
// console.log(text);

// const button = document.querySelector(".button");

// button.addEventListener("click", () => {
//   text.forEach((el, i) => {
//     el.textContent = i + 1;
//   });
// });

//TODO: № 4 ==============================================
// Кнопка "Приховати" ховає текст і замінює назву кнопки на
// "Розкрити", при повторному натисканні текст знову стає доступним
// і кнопка набуває початкового вигляду.

// const button = document.querySelector("#passwordButton");
// const input = document.querySelector("#passwordInput");
// const opened = "Приховати";
// const closed = "Розкрити";

// button.addEventListener("click", () => {
//   if (input.type === "password") {
//     button.textContent = opened;
//     input.type = "text";
//   } else {
//     input.type = "password";
//     button.textContent = closed;
//   }
// });

//TODO: № 5 ==============================================
// Кнопка "Зменшити" робить квадрат менше на 10 пікселів, кнопка "Збільшити" - більше на 10 пікселів.

// const buttonToLittle = document.querySelector("#decrease");
// const buttonToBig = document.querySelector("#increase");
// const square = document.querySelector("#box");

// buttonToLittle.addEventListener("click", () => {
//   square.style.width =
//     parseInt(window.getComputedStyle(square).width) - 10 + "px";
//   square.style.height =
//     parseInt(window.getComputedStyle(square).height) - 10 + "px";
// });

// buttonToBig.addEventListener("click", () => {
//   square.style.width =
//     parseInt(window.getComputedStyle(square).width) + 10 + "px";
//   square.style.height =
//     parseInt(window.getComputedStyle(square).height) + 10 + "px";
// });

//TODO: № 6 ==============================================
// Натиснувши кнопку "Подвоювати", збільшити значення
// у кожному елементі списку у 2 рази

// const listItems = document.querySelectorAll("li");
// const button = document.querySelector("#double");

// button.addEventListener("click", double);

// function double() {
//   listItems.forEach((item) => {
//     item.textContent = parseInt(item.textContent) * 2;
//   });
// }

//TODO: № 7 ==============================================
// Додайде слухач кліку і визначте, коли клік відбувається
// всередині елемента з id "place" і коли клік припадає поза зоною елемента
// https://developer.mozilla.org/en-US/docs/Web/API/Node/contains

//TODO: № 8 ==============================================
// Вводимо число у input з id="test" - число
// При кліку на кнопку, у інпут з id="result" повинен буди квадрат цього числа
// Зробити перевірку на число, реалізувати за допомогою alert з текстом

//TODO: № 9 ==============================================
// Напишіть інтерфейс, щоб створити список
// Для кожного пункту:
// Запитуйте вміст у користувача за допомогою promt
// створювати пункт та додавати його до списку
// процес припиняється коли користувач натискає ESC
// усі елементи мають створюватись динамічно
