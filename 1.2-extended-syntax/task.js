"use strict";
function getResult(a,b,c){
  let d = Math.pow(b, 2) - 4 * a * c;
      x = [];
if (d == 0) {
  x[0] = -b / (2 * a);
   return x;
  } else if (d < 0) {
    return 0;
     } else if (d > 0) {
      x[0] = (-b + Math.sqrt(d)) / (2 * a);
      x[1] = (-b - Math.sqrt(d)) / (2 * a);
      return x;
    }
};

function getAverageMark(marks){
  sumMarks = 0;
  if (marks.length == 0) {
    averageMark = marks.length;
     return averageMark;
  } else if (marks.length > 5) {
       console.log("Оценок больше 5");
     for (let i = 0; i < marks.length; i++) {
       let marksSlice = marks.splice(5, 1);
           sumMarks += marks[i];
      };
       let averageMark = sumMarks / marks.length;
        return averageMark;
    };
}

function askDrink(name,dateOfBirthday){
    let date = new Date().getFullYear();
        failMessage = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
        confirmMessage = `Не желаете ли олд-фэшн, ${name}?`;
        newDate = date - dateOfBirthday.getFullYear();
    if (newDate < 18) {
      return failMessage;
    } else {
        return confirmMessage;
    };
}