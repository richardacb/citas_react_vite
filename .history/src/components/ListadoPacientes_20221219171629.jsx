import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes }) => {

  //extraemos los pacientes
  //const { nombre, propietario, email, fecha, sintoma } = pacientes;

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
      <p className="text-xl mt-5 mb-10 text-center">Administra tus {''}
        <span className="text-indigo-600 font-bold">
            Pacientes y Citas
        </span>
      </p>

      { pacientes.map( (paciente) => {
        return (
          <h1>Desde Map</h1>
        )
      })}

      <Paciente />
    </div>
  );
};

export default ListadoPacientes;
//me quede por el 17E