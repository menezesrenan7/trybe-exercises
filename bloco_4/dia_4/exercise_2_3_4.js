let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

info['recorrente'] = 'Sim';

console.log(info);

for (let key in info) {
  console.log(key);
}

for (let key2 in info) {
  console.log(info[key2]);
}

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
}



for (let key3 in info) {
  console.log(info[key3] + ' e ' + info2[key3]); 
}
