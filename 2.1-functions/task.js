// -------------------------1-------------------------

// D < 0 
let a = 9,
b = -6,
c = 2;

// D > 0 
// let a = 2,
// b = 5,
// c = -7;

// D = 0 
// let a = 16,
// b = -8,
// c = 2;




function getSolutions( a, b, c ) {
    let d = Math.pow(b, 2) - 4 * a * c,
        x = {},
        x1,
        x2;
  if (d === 0) {
      x1 = -b / (2 * a);
      x.D = d;
      x.roots = [x1];
    } else if (d < 0) {
      x.D = d;
      x.roots = [];
       } else if (d > 0) {
        x1 = (-b + Math.sqrt(d)) / (2 * a);
        x2 = (-b - Math.sqrt(d)) / (2 * a);
        x.D = d;
        x.roots = [x1, x2];
      }
      return x;
  };
  
  function showSolutionsMessage( a, b, c ) {
   let result = getSolutions( a, b, c );
   console.log(`«Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}»`);
   console.log(`«Значение дискриминанта: ${result.D}»`);
    if (result.D === 0) {
      console.log(`«Уравнение имеет один корень X₁ = ${result.roots[0]}»`);
    } else if (result.D < 0) {
      console.log(`«Уравнение не имеет вещественных корней»`);
    } else if (result.D > 0) {
      console.log(`«Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}»`);
    };
  };
  

  console.log(showSolutionsMessage(a, b, c));

// -------------------------2-------------------------
let data = {
    biology: [5,4,5,4],
    chemistry: [5,4,5,4],
    physics: [5,4,5,4],
    statistics: [5,4,5,4],
    literature: [5,4,5,4],
    composition: [5,4,5,4],
    history: [5,4,5,4],
    economics: [5,4,5,4],
    humanities: [5,4,5,4],
    algebra: []
};


function getAverageScore(data) {
  let counter = 0; // просчет общего количества значений в data для последующего вычисления среднего значения оценок
  for (let key in data) {
  counter++;
};
  console.log(counter);

  for (let key in data) { //перебор data и получение массивов для дальнейшего просчета суммы и вычисления среднего
    let marks = data[key];
    
  
  console.log(marks);
  };
  


function getAverageMark(marks) {
 

};

};

// -------------------------3-------------------------

let secret = {
  aaa: 1,
  bbb: 0
 };
 
 let secretData = {
  firstName: 'Эмильо',
  lastName: 'Родриго'
 };
 
 
 function getPersonData(secretData) {
   
 
 
 
 };
 
 function getDecodedValue(secret) {
  // Не понятно как совместить эти два объекта, чтобы на выходе получить строку
 
 
 };
 
 console.log(getDecodedValue(secret));
