String.prototype.isPalindrome = function () {
    let abc = this.toLowerCase().replace(/\s/g, '').split("");
    return abc.join("") == abc.reverse().join("");
   };
   

function getAverageMark(marks) {
    let sumMarks = 0;
    if (marks.length == 0) {
        return 0;
    };
    for (let i = 0; i < marks.length; i++) {
     sumMarks += marks[i];
    };
    let average = sumMarks / marks.length,
        roundedAverage = Math.round(average);
    return roundedAverage;
}

function checkBirthday(birthday) {
    let now = +new Date();
        birthday = +new Date(birthday);
    let diff = now - birthday,
        age = diff / 31536000000;
    if (age >= 18) {
     return true;
    } else {
       return false;
    };
};