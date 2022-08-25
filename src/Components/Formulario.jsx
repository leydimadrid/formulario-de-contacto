const Formulario = () => {
  return (
    <div className="text-center mx-auto md:flex">
      <form className="bg-white shadow-xl rounded-lg py-5  px-5">
        <div>
        <label className="block text-gray-700 font-medium text-left">NOMBRE COMPLETO</label> 
        <input 
        id="Titulo" 
        type="text"
        name="name" 
        placeholder="Escribe tu nombre" 
        className="border-2 rounded-md md p-1" 
        value={""}
        onChange=""
        required/> 
      
        <label className="block text-gray-700 font-medium text-left mt-2">CELULAR</label> 
        <input 
        id="Celular" 
        type="number" 
        name="name" 
        placeholder="Escribe tu celular" 
        className="border-2 rounded-md md p-1"
        value={""}
        onChange=""
        required/> 

        <label className="block text-gray-700 font-medium text-left mt-2">CORREO</label> 
        <input 
        id="Correo" 
        type="email" 
        name="name" 
        placeholder="Escribe tu email" 
        className="border-2 rounded-md md p-1"
        value={""}
        onChange=""
        required/> 

        <label className="block text-gray-700 font-medium text-left mt-2">CUMPLEAÑOS</label> 
        <input 
        id="Cumpleaños" 
        type="date" 
        name="fecha" 
        className="border-2 rounded-md p-1"
        value={""}
        onChange=""
        required/>

        <button onSubmit
        className="block bg-violet-700 rounded-lg" 
        value={""} >ENVIAR</button>
        </div>
      </form>
      <div className="bg-white shadow-xl rounded-lg py-5 px-5 mx-5 my-auto">
      <b className="block text-left uppercase">NOMBRE COMPLETO: {} </b>
      <b className="block text-left uppercase">CELULAR: {}  </b>
      <b className="block text-left uppercase">CORREO: {} </b>
      <b className="block text-left uppercase">CUMPLEAÑOS: {} </b>
      </div>
    </div>
  )
}

export default Formulario
