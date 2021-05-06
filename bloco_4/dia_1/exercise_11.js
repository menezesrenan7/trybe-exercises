let salarioBruto = 1500;

let salarioAposINSS;
let salarioLiquido;

if (salarioBruto > 0 && salarioBruto <= 1318.04) {
    salarioAposINSS = salarioBruto * (1 - 0.08);
} else if (salarioBruto > 1318.04 && salarioBruto <= 2196.76) {
    salarioAposINSS = salarioBruto * (1 - 0.09);
} else if (salarioBruto > 2196.76 && salarioBruto <= 4393.50) {
    salarioAposINSS = salarioBruto * (1 - 0.11);
} else if (salarioBruto > 4393.50) {
    salarioAposINSS = salarioBruto - 483.28;
} else {
    console.log('Erro: insira valores  a partir de 0.');
}

if (salarioAposINSS > 0 && salarioAposINSS <= 1611.84) {
    salarioLiquido = salarioAposINSS;
} else if (alarioAposINSS > 1611.84 && salarioAposINSS <= 2826.65) {
    salarioLiquido = salarioAposINSS * 1.075 - 120.89;
} else if (alarioAposINSS > 2392.94 && salarioAposINSS <= 3175.49) {
    salarioLiquido = salarioAposINSS * 1.15 - 300.36;
} else if (alarioAposINSS > 3175.50 && salarioAposINSS <= 3948.94) {
    salarioLiquido = salarioAposINSS * 1.225 - 538.52;
} else if (alarioAposINSS > 3948.94) {
    salarioLiquido = salarioAposINSS * 1.275 - 735.97;
}

console.log('O salário líquido é de R$' + salarioLiquido + '.');