//TODO: № 1  ============================================================
//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив
// const numbers = [2, 5, 35, 56, 12, 1, 7, 80, 3];

const numbers = [2, 5, 35, 56, 12, 1, 7, 80, 3];
function findSmallerNumber(numbers) {
  // return Math.min(...numbers);
  if (!Array.isArray(numbers)) {
    return "Hello Vova - це не масив";
  }
  let numberMin = numbers[0];
  for (const number of numbers) {
    if (numberMin > number) {
      numberMin = number;
    }
  }
  return numberMin;
}

console.log(findSmallerNumber(numbers));
