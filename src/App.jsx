import './App.css';
import Contador from'./components/contador.jsx'
import Listado from './components/listado.jsx'
import Temperatura from './components/temperatura.jsx'
import Formulario from './components/Formulario.jsx';

function App() {
  return (
    <div className="App mt-5">
      <h1>Titulo de nuestro primer proyecto</h1>
      <Contador></Contador>
      <Listado></Listado>
      <Temperatura></Temperatura>
      <Formulario></Formulario>
    </div>
  );
}

export default App;
