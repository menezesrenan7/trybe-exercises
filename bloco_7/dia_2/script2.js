const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Exercício 1.
const addTurnoLesson2 = (obj, key, keyValue) => obj[key] = keyValue;

console.log(addTurnoLesson2(lesson2, 'turno', 'manhã'));

// Exercício 2.
const keyList = obj => Object.keys(obj);

// Exercício 3.
const objectSize = obj => Object.keys(obj).length;

// Exercício 4.
const objectValues = obj => Object.values(obj);

// Exercício 5.
const objectList = {lesson1, lesson2, lesson3};
let allLessons = {};
Object.assign(allLessons, objectList);

// Exercício 6.
const totalStudents = obj => {
  let sum = 0;
  for (let lesson in obj) {
    sum += Object.values(obj[lesson])[1];
  }
  return sum;
}

// Exercício 7.
const getValueByNumber = (obj, position) => Object.values(obj)[position];

// Exercício 8.
const verifyPair = (obj, keyName, keyValue) => obj[keyName] === keyValue;

// Bônus 1.
const countMathStudents = obj => {
  let sum = 0;
  for (let lesson in obj) {
    if (Object.values(obj[lesson])[0] === 'Matemática') {
      sum += Object.values(obj[lesson])[1];
    }
  }
  return sum;
}

// Bônus 2.
const createReport = (obj, professorName) => {
  const report = new Object();
  let aula = [];
  let students = 0;
  for (let lesson in obj) {
    if (obj[lesson].professor === professorName) {
      aula.push(obj[lesson].materia);
      students += obj[lesson].numeroEstudantes;
    }
  }
  report.professor = professorName;
  report.aulas = aula;
  report.estudantes = students;
  return report;
};
console.log(createReport(allLessons, 'Carlos'));