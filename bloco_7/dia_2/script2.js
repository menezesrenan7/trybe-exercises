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
console.table(lesson2);

// Exercício 2.
const keyList = obj => Object.keys(obj);
console.log(keyList(lesson3));

// Exercício 3.
const objectSize = obj => Object.keys(obj).length;
console.log(objectSize(lesson3));

// Exercício 4.
const objectValues = obj => Object.values(obj);
console.log(objectValues(lesson3));

// Exercício 5.
const objectList = {lesson1, lesson2, lesson3};
let allLessons = {};
Object.assign(allLessons, objectList)
console.log(allLessons);

// Exercício 6.
const totalStudents = obj => {
  let sum = 0;
  for (let lesson in obj) {
    sum += Object.values(obj[lesson])[1];
  }
  return sum;
}
console.log(totalStudents(allLessons));

// Exercício 7.
const getValueByNumber = (obj, position) => Object.values(obj)[position];
console.log(getValueByNumber(lesson1, 0));

// Exercício 8.
const verifyPair = (obj, keyName, keyValue) => obj[keyName] === keyValue;

console.log(verifyPair(lesson3, 'turno', 'noite'));