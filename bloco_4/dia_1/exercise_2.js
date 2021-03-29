// let a = 5;
// let b = 10;

// if (a > b) {
//     console.log("a é maior que b");
// } else {
//     console.log("b é maior que a");
// }

function Larger(a, b) {
    let maior;
    if (a > b) {
        maior = "a é maior que b";
    } else {
        maior = "b é maior que a";
    }
    return maior;
};

Larger(40,30);
