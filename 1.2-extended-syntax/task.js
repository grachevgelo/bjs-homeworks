"use strict";
function getResult(a,b,c){
  let d = Math.pow(b, 2) - 4 * a * c;
  let x = [];
if (d === 0) {
  x[0] = -b / (2 * a);
  } else if (d < 0) {
    x = [0];
     } else if (d > 0) {
      x[0] = (-b + Math.sqrt(d)) / (2 * a);
      x[1] = (-b - Math.sqrt(d)) / (2 * a);
    }
    return x;
};

function getAverageMark(marks){
  let sumMarks = 0;
  if (marks.length > 5) {
    console.log("Оценок больше 5");
  } else if (marks.length === 0) {
     averageMark = 0;
    };
  marks.splice(5, 99);
  for (let i = 0; i < marks.length; i++) {
    sumMarks += marks[i];
  };
 let averageMark = sumMarks / marks.length;
  return averageMark;
};

function askDrink(name,dateOfBirthday){
    let failMessage = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    let confirmMessage = `Не желаете ли олд-фэшн, ${name}?`;
    let newDate = new Date().getFullYear() - dateOfBirthday.getFullYear();
    if (newDate < 18) {
      return failMessage;
    } else {
        return confirmMessage;
    };
}