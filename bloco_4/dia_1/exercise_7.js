let notaPercentual = 50;

if (notaPercentual >= 90 && notaPercentual <= 100) {
    console.log('A');
} else if (notaPercentual < 90 && notaPercentual >= 80) {
    console.log('B');
} else if (notaPercentual < 80 && notaPercentual >= 70) {
    console.log('C');
} else if (notaPercentual < 70 && notaPercentual >= 60) {
    console.log('D');
} else if (notaPercentual < 60 && notaPercentual >= 50) {
    console.log('E');
} else if (notaPercentual < 50 && notaPercentual >= 0) {
    console.log('F');
} else {
    console.log('Erro');
}