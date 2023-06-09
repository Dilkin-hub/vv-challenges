const inputGrades = prompt('Insira as notas do aluno separadas por vírgula:');
const grades = inputGrades.split(',');

let valid = [];
let calc = 0;

for (var i = 0; i < grades.length; i++) {
  const grade = parseFloat(grades[i].trim());

  if (!isNaN(grade) && grade >= 1 && grade <= 10) {
    valid.push(grade);
  } else {
    valid.push(0);
  }
}

for (var j = 0; j < valid.length; j++) {
  calc += valid[j];
}

const media = calc / valid.length;

alert('A média das notas é: ' + media.toFixed(2));