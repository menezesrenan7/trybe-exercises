import ReactDOM from 'react-dom'

const Tast = (value) => {
  return (
    <li>{value}</li>
  );
};

function Compromissos() {
  const compromissos = 
  ['escovar os dentes', 'tomar café-da-manhã', 'tomar banho', 'estudar', 'trabalhar'];
  ReactDOM.render(compromissos, document.getElementById('root'));
}
export default Task;