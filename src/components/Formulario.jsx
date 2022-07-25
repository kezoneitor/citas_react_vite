import { useState, useEffect } from 'react'
import Notificacion from './Notificacion'

function Formulario({ Pacientes, setPacientes, Paciente, setPaciente }) {
  const [NombreMascota, setNombreMascota] = useState('')
  const [NombrePropietario, setNombrePropietario] = useState('')
  const [Email, setEmail] = useState('')
  const [Fecha, setFecha] = useState('')
  const [Sintomas, setSintomas] = useState('')

  const [Error, setError] = useState(false)

  //#region useEffect
  useEffect(() => {
    if (Object.keys(Paciente).length > 0) {
      setNombreMascota(Paciente.NombreMascota)
      setNombrePropietario(Paciente.NombrePropietario)
      setEmail(Paciente.Email)
      setFecha(Paciente.Fecha)
      setSintomas(Paciente.Sintomas)
    }
  }, [Paciente])


  //#endregion

  //#region Functions
  const generarId = () => {
    const fecha = Date.now().toString(25)
    const random = Math.random().toString(25).substring(2)
    return `${fecha}_${random}`
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    //Validacion del Formulario
    if ([NombreMascota, NombrePropietario, Email, Fecha, Sintomas].includes('')) {
      setError(true)
      return;
    }
    setError(false)

    //Crear objeto paciente
    const nuevoPaciente = {
      NombreMascota,
      NombrePropietario,
      Email,
      Fecha,
      Sintomas
    };

    if (Paciente.id) {
      //Editar registro
      nuevoPaciente.id = Paciente.id;
      const pacientesActualizados = Pacientes.map(pacienteState =>
        pacienteState.id === Paciente.id ? nuevoPaciente : pacienteState
      )

      setPacientes(pacientesActualizados)
      setPaciente({})
    }
    else {
      //Agregar nuevo paciente
      nuevoPaciente.id = generarId()
      setPacientes([...Pacientes, nuevoPaciente])
    }

    //Limpiar formulario
    setNombreMascota('')
    setNombrePropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
  }


  //#endregion


  return (
    <div className="md:w-1/2 lg:w-2/5 mb-5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {''}
        <span className="text-indigo-500 font-bold">Administralos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5"
      >
        {Error && <Notificacion mensaje='Todos los campos son obligatorios' tipo='error' />}
        <div className="mb-5">
          <label htmlFor="nombreMascota" className="block text-gray-700 uppercase font-bold">
            Nombre Mascota
          </label>
          <input
            id="nombreMascota"
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholderbg-gray-400 rounded-md"
            value={NombreMascota}
            onChange={(event) => setNombreMascota(event.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="nombrePropietario" className="block text-gray-700 uppercase font-bold">
            Nombre Propietario
          </label>
          <input
            id="nombrePropietario"
            type="text"
            placeholder="Nombre Propietario"
            className="border-2 w-full p-2 mt-2 placeholderbg-gray-400 rounded-md"
            value={NombrePropietario}
            onChange={(event) => setNombrePropietario(event.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Contacto del Propietario"
            className="border-2 w-full p-2 mt-2 placeholderbg-gray-400 rounded-md"
            value={Email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
            Alta
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholderbg-gray-400 rounded-md"
            value={Fecha}
            onChange={(event) => setFecha(event.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
            Sintomas
          </label>
          <textarea
            id="sintomas"
            placeholder="Describe los sintomas"
            className="border-2 w-full p-2 mt-2 placeholderbg-gray-400 rounded-md"
            value={Sintomas}
            onChange={(event) => setSintomas(event.target.value)}
          />
        </div>

        <input
          type="submit"
          value={Paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
        />
      </form>
    </div>
  )
}

export default Formulario