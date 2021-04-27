testingScope = (escopo) => { 
  let ifScope = 'Não devo ser utilizada fora do meu escopo (if) ótimo, fui utilizada no escopo !';
  let elseScope = 'Não devo ser utilizada fora meu escopo (else)';

  escopo ? console.log(ifScope) : console.log(elseScope);
  
  console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true);