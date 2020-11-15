"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {
    let persentP = percent / 100; // округление до дроби
        date2 = new Date(); // дата сегодняшнего дня
        creditBody = amount - contribution; //тело кредита
        payMounthMsec = date - date2; // просчет разности в месяце (на выходе получаем миллисекунды, как получить месяц?)
        totalAmount = creditBody * (persentP + persentP / ((Math.pow(1 + persentP), payMounthMsec) - 1)); // Платеж=S*(P+P/(((1+P)^n)-1)), где: S - тело кредита, P - 1/12 процентной ставки (от 0 до 1), n - количество месяцев ^ - возведение в степень
return totalAmount.toFixed(2); // ответ округлен, но из-за месяца выдает некорректный ответ

}

function getGreeting(name) {
let greeting = `Привет, мир! Меня зовут ${name}.`;
 if (name === "") {
  let name = "Аноним";
      greeting = `Привет, мир! Меня зовут ${name}.`;
   return greeting;
} else {
    return greeting;
  }
};