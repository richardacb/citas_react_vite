import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes }) => {

  return (

    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      { pacientes && pacientes.length (
        <>

        </>
      )}
    
    </div>
  );
};

export default ListadoPacientes;