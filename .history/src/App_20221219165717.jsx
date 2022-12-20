import { useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {

  //creamos el arreglo de pacientes
  const [ pacientes, setPacientes ] = useState([]);

  return (
    <div className="container mx-auto mt-20">
      <Header 
      
      pacientes={pacientes}
        setPacientes={setPacientes}
      />
      <div className="mt-12 md:flex">
        <Formulario />
        <ListadoPacientes />
      </div>
    </div>
  );
}

export default App;
