// Cria opções de estados do Brasil para ser inseridas no comboBox.
const estados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Minas Gerais', 'Pará','Paraná', 'Pernambuco','Piauí', 'Rio de Janeiro', 'Rondônia', 'Roraima', 'Sergipe', 'Tocantins', 'Distrito Federal', 'Mato Grosso do Sul', 'Paraíba', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Santa Catarina', 'São Paulo'];
const estadosSigla = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];
const comboBox = document.getElementById('lista-estados');
for (let index = 0; index < estados.length; index += 1) {
  const option = document.createElement('option');
  option.value = estadosSigla[index];
  option.innerText = estados[index];
  option.id = 'opcoes-estado';
  comboBox.appendChild(option);
}

// Cria checagens para o campo 'data inicial'.
function checkDate() {
  const dateBoxValue = document.getElementById('dateBox').value;
  const checkDash = dateBoxValue.match(/[/]+/g);
  const dateArray = dateBoxValue.split('/', 3);
  
  if (dateBoxValue === '') {
    return alert('Favor, preencher a data de início.');
  } 

  if (checkDash !== null && checkDash.length === 2) {
  } else {
    return alert('A data informada não está no formato dd/mm/aaaa');
  }
  
  if (dateArray[0] > 0 && dateArray[0] <= 31) {
  } else {
    return alert('O dia informado deve ser maior que zero e menor ou igual a 31.');
  }
    
  if (dateArray[1] > 0 & dateArray[1] <= 12) {
  } else {
    return alert('O mês informado deve ser maior que zero e menor ou igual a 12.');
  }
  
  if (dateArray[2] > 0) { 
  } else {
    return alert('O ano informado é menor do que 0.');
    
  }
}

// Função que previne o envio do formulário e exibe alertas.
function preventDefault(event) {
  event.preventDefault();
  checkDate();
}
const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', (event) => {
  preventDefault(event)
  getFormAnswer()
})

// Monta uma <div> com o consolidado dos dados que foram inseridos no formulário.
const form = document.getElementById('cv-form');
function getFormAnswer() {
  const formData = new FormData(form);
  for (let pair of formData.entries()) {
    console.log(pair);
  }
}
