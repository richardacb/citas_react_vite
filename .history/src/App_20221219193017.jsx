import { useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  //creamos el arreglo de pacientes
  const [pacientes, setPacientes] = useState([]);

  //state para editar el paciente
  const [paciente, setPaciente] = useState({});

  //funcion para eliminar el paciente
  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id );

    console.log()
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario 
          pacientes={pacientes} 
          setPacientes={setPacientes} 
          paciente={paciente}
          setPaciente={setPaciente}
          />

        <ListadoPacientes 
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
