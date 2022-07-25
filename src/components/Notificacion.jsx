const Notificacion = ({ mensaje, tipo }) => {
  const tipoNotificacion = (tipo) => {
    let color = 'bg-gray-400';
    switch (tipo) {
      case 'error':
        color = 'bg-red-600'
        break
      default:
        break
    }
    return color
  }
  return (
    <div className={`${tipoNotificacion(tipo)} text-white text-center p-3 uppercase font-bold mb-3 rounded-md`}>
      <p>{mensaje}</p>
    </div>
  )
}

export default Notificacion