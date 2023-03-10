const Formulario = () => {
    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Seguimiento Paciente</h2>

            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {''} <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form className="bg-white shadow-md rounded-lg py-10 px-5">
                <div>
                    <label className="block text-gray-600">Nombre de las Mascotas</label>
                    <input 
                        type="text"
                        placeholder="Nombre de la Mascota"
                        className=""
                    />
                </div>
            </form>
        </div>
    )
}

export default Formulario;