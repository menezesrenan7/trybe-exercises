let chessPiece = 'cachorro';

switch (chessPiece.toLowerCase()) {
    case 'rei':
        console.log('Movimento em qualquer direção, uma casa por vez')
        break;
    case 'dama':
        console.log('Movimento em qualquer direção, quantas casas desejar')
        break;
    case 'torre':
        console.log('Movimento em linha reta, na horizontal ou na vertical')
        break;
    case 'peão':
        console.log('Movimento para frente, uma casa por vez')
        break;
    case 'bispo':
        console.log('Movimento em linha reta na diagonal, quantas casas desejar')
        break;
    case 'cavalo':
        console.log('Movimento de duas casas na vertical ou na horizontal, mais uma casa que forme um ângulo reto')
        break;
    default:
        console.log('Erro')
        break;
}