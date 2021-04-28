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