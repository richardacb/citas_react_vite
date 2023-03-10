import { useState, useEffect } from "react";

const Formulario = () => {

    //empezmos a utilziar usestate local de nombre
    const [ nombre, setNombre ] = useState('');

    //empezmos a utilziar usestate local de propietario
    const [ propietario, setPropietario ] = useState('');

    //empezmos a utilziar usestate local de email
    const [ email, setEmail ] = useState('');

    //empezmos a utilziar usestate local de alta
    const [ fecha, setFecha ] = useState('');

    //definimos el state local para los sintomas
    //fucion para valdiar el formualrio
    const handleSubmit =  (e) => {

        e.preventDefault();
        console.log('Enviadno formulario');
    }

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Seguimiento Paciente</h2>

            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {''} <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form 
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
            >
                <div className="mb-5">
                    <label  htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
                        Nombre de las Mascotas
                    </label>
                    <input 
                        id="mascota"
                        type="text"
                        placeholder="Nombre de la Mascota"
                        value={nombre}
                        onChange= {(e) => setNombre(e.target.value)}
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    />
                </div>

                <div className="mb-5">
                    <label  htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
                        Nombre del Propietario
                    </label>
                    <input 
                        id="propietario"
                        type="text"
                        placeholder="Nombre del Propietario"
                        value={propietario}
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    />
                </div>

                <div className="mb-5">
                    <label  htmlFor="email" className="block text-gray-700 uppercase font-bold">
                        Email
                    </label>
                    <input 
                        id="email"
                        type="email"
                        placeholder="Email de Contacto"
                        value={email}
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    />
                </div>

                <div className="mb-5">
                    <label  htmlFor="alta" className="block text-gray-700 uppercase font-bold">
                        Fecha de Alta
                    </label>
                    <input 
                        id="alta"
                        type="date"
                        value={fecha}
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    />
                </div>

                <div className="mb-5">
                    <label  htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
                        Síntomas
                    </label>
                    <textarea
                        id="sintomas"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Describe los síntomas"
                        value={sintomas}
                    />
                </div>

                <input 
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-indigo-800 cursor-pointer transition-opacity"
                    value="Agregar Pacientes"
                /> 
            </form>
        </div>
    )
}

export default Formulario;