import { useState, useEffect } from 'react'
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {
  const [Pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('Pacientes')) ?? [])
  const [Paciente, setPaciente] = useState({})

  useEffect(() => {
    localStorage.setItem('Pacientes', JSON.stringify(Pacientes))
  }, [Pacientes])

  const eliminarPaciente = (id) => {
    const pacientesActualizados = Pacientes.filter(pacienteState => pacienteState.id !== id)
    setPacientes(pacientesActualizados)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
        <Formulario
          Pacientes={Pacientes}
          setPacientes={setPacientes}
          Paciente={Paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          Pacientes={Pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
