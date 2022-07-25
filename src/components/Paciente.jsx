import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'


function Paciente({ paciente, setPaciente, eliminarPaciente }) {
  const {
    NombreMascota,
    NombrePropietario,
    Email,
    Fecha,
    Sintomas,
    id
  } = paciente

  const handleEliminar = () => {
    const respuesta = confirm('Deseas eliminar este paciente?')
    if (respuesta)
      eliminarPaciente(id)
  }
  return (
    <div className=" bg-white shadow-md mx-5 my-5 px-5 py-10 rounded-lg">
      <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
        <span className="font-normal normal-case">{NombreMascota}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
        <span className="font-normal normal-case">{NombrePropietario}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Contacto: {''}
        <span className="font-normal normal-case">{Email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de Alta: {''}
        <span className="font-normal normal-case">{Fecha}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
        <span className="font-normal normal-case">{Sintomas}</span>
      </p>

      <div className='flex justify-between'>
        <button
          type='button'
          className='mx-auto py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-bold uppercase'
          onClick={() => setPaciente(paciente)}
        >
          <FontAwesomeIcon icon={faPenToSquare} size='2x' />
        </button>
        <button
          type='button'
          className='mx-auto py-2 px-10 bg-red-600 hover:bg-red-700 text-white rounded-md font-bold uppercase'
          onClick={handleEliminar}
        >
          <FontAwesomeIcon icon={faTrashCan} size='2x' />
        </button>
      </div>
    </div>
  )
}

export default Paciente