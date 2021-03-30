let price = 50;
let unitCost = 30;
let quantity = 10;

let taxes = 0.2 * unitCost;
let totalCosts = quantity * (unitCost + taxes);
let totalSales = quantity * price;

if (price < 0 || unitCost < 0) {
    console.log('Erro: insira valores acima de 0');
} else {
    console.log('O lucro é de', totalSales - totalCosts, 'reais.');
}


