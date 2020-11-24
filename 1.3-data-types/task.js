"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {
    let persentP = percent / 100, // округление до дроби
        date2 = new Date(), // дата сегодняшнего дня
        creditBody = amount - contribution, //тело кредита
        totalPayMounth = (((date.getFullYear() - date2.getFullYear()) * 12) + (date.getMonth() - date2.getMonth())), // просчет разности в месяце.
        payMounth = creditBody * ((persentP + persentP) / (((1 + persentP) ** totalPayMounth) - 1)), // Платеж=S*(P+P/(((1+P)^n)-1)), где: S - тело кредита, P - 1/12 процентной ставки (от 0 до 1), n - количество месяцев ^ - возведение в степень
        totalAmount = payMounth * totalPayMounth; //просчет общей суммы платежа
return totalAmount.toFixed(2); // ответ округлен

}

function getGreeting(name) {
 let greeting = `Привет, мир! Меня зовут ${name || 'Аноним'}.`;
  return greeting;
};