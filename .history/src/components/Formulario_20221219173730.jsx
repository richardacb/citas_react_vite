import { useState, useEffect } from "react";
import Errores from "./Errores";

const Formulario = ({ pacientes, setPacientes }) => {
  //empezmos a utilziar usestate local de nombre
  const [nombre, setNombre] = useState("");

  //empezmos a utilziar usestate local de propietario
  const [propietario, setPropietario] = useState("");

  //empezmos a utilziar usestate local de email
  const [email, setEmail] = useState("");

  //empezmos a utilziar usestate local de alta
  const [fecha, setFecha] = useState("");

  //definimos el state local para los sintomas
  const [sintoma, setSintoma] = useState("");

  //creamos el state para el error
  const [error, setError] = useState(false);

  //funcion para generar ID
  const generarId = () => {
    const random = Math.random().toString(36).str;
    const fecha = Date.now().toString(36);

    return random + fecha;
  }

  //fucion para valdiar el formualrio
  const handleSubmit = (e) => {
    e.preventDefault();
    //validamos el formulario
    if ([nombre, propietario, email, fecha, sintoma].includes("")) {
      console.log("Al menos un campo vacio");

      setError(true)
      return;
    }
    setError(false)

    //llenamos el arreglo de pacientes
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintoma,
      id: generarId()
    }
    //console.log(objetoPaciente)
    setPacientes([
      ...pacientes,
      objetoPaciente
    ]);

    //reiniciamos el form
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintoma('')
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Paciente</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}{" "}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5"
      >
        { error && <Errores 
          mensaje='Todos los campos son obligatorios'
        />}
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre de las Mascotas
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la Mascota"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre del Propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del Propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email de Contacto"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Fecha de Alta
          </label>
          <input
            id="alta"
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Síntomas
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los síntomas"
            value={sintoma}
            onChange={(e) => setSintoma(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-indigo-800 cursor-pointer transition-opacity"
          value="Agregar Pacientes"
        />
      </form>
    </div>
  );
};

export default Formulario;
