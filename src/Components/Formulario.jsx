import { useState } from "react"

const Formulario = () => {


   const [titulo, setTitulo] = useState('')
   const [celular, setCelular] = useState('')
   const [correo, setCorreo] = useState('')
   const [cumpleanos, setCumpleanos] = useState('')

  //  const handleSubmit = (e) => {
  //     e.prevenDefault ();
  //  };
  
  return (
    <div className=" mx-auto md:flex">
      <form 
        className="bg-white shadow-xl rounded-lg py-5  px-5">
        <div>
        <label className="block text-gray-700 font-medium text-left text-sm">NOMBRE COMPLETO</label> 
        <input 
        id="titulo" 
        type="text"
        name="name" 
        placeholder="Escribe tu nombre" 
        className="border-2 rounded-md md p-1" 
        value={titulo}
        onChange={(e) => setTitulo (e.target.value)}
        required/> 
      
        <label className="block text-gray-700 font-medium text-left mt-2 text-sm">CELULAR</label> 
        <input 
        id="celular" 
        type="number" 
        name="name" 
        placeholder="Escribe tu celular" 
        className="border-2 rounded-md md p-1"
        value={celular}
        onChange={(e) => setCelular (e.target.value)}
        required/> 

        <label className="block text-gray-700 font-medium text-left mt-2 text-sm">CORREO</label> 
        <input 
        id="correo" 
        type="email" 
        name="name" 
        placeholder="Escribe tu email" 
        className="border-2 rounded-md md p-1"
        value={correo}
        onChange={(e) => setCorreo (e.target.value)}
        required/> 

        <label className="block text-gray-700 font-medium text-left mt-2 text-sm">FECHA DE NACIMIENTO</label> 
        <input 
        id="cumpleanos" 
        type="date" 
        name="fecha" 
        className="border-2 rounded-md p-1 w-48"
        value={cumpleanos}
        onChange={(e) => setCumpleanos (e.target.value)}
        required/>

        <button
        className="block bg-violet-700 rounded-lg text-white p-2 mt-2 px-5 mx-auto" 
        value={""} >ENVIAR</button>
        </div>
      </form>
      <div className="bg-white  text-gray-700 font-medium text-sm shadow-xl rounded-lg py-5 px-5 mx-5 my-auto">
      <b className="block text-left uppercase">NOMBRE COMPLETO: {titulo} </b>
      <b className="block text-left uppercase">CELULAR: {celular}  </b>
      <b className="block text-left uppercase">CORREO: {correo} </b>
      <b className="block text-left uppercase">CUMPLEAÑOS: {cumpleanos} </b>
      </div>
    </div>
  )
}

export default Formulario
