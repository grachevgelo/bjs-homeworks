"use strict";
function getResult(a,b,c){
let d = Math.pow(b, 2) - 4 * a * c;
if (d == 0) {
    x = -b / 2 * a;
} else if (d < 0) {
    x = -b / 2 * a;
 } else if (d > 0) { // у d будет 2 корня, не понимаю, как их написать и вывести 2 ответа
    x = 
 };
    // return x;
}

function getAverageMark(marks){
    let marks = [1, 1, 1, 1, 1, 1, 1];
    sumMarks = 0;
 if (marks.length == 0) {
   console.log('0');
} else {
   for (let i = 0; i < marks.length; i++) {
    console.log(marks[i]);
    let marksSlice = marks.splice(0, 5);
    console.log(marksSlice); // почему то возвращает 1, хотя должен возращать сумму
    sumMarks = sumMarks + parseInt(marksSlice);
    console.log("Сумма" + sumMarks);
    let x = sumMarks / marks.length;
      console.log( "Итог" + x);

    if (marks.length > 5) {
      console.log("Оценок больше 5")
    }
   }
};
    // return averageMark;
}

function askDrink(name,dateOfBirthday){
    let date = new Date();
        failMessage = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
        confirmMessage = `Не желаете ли олд-фэшн, ${name}?`;
        newDate = date.getFullYear() - dateOfBirthday;
    if (newDate < 18) {
      return failMessage;
    } else {
        return confirmMessage;
    };
}