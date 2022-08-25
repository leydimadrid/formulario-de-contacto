import { useState } from "react";
import Error from "./Error";

const Formulario = () => {
  const [titulo, setTitulo] = useState("");
  const [celular, setCelular] = useState("");
  const [correo, setCorreo] = useState("");
  const [cumpleanos, setCumpleanos] = useState("");

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([titulo, celular, correo, cumpleanos].includes("")) {
      setError(true);
      return;
    }

    setTitulo("");
    setCelular("");
    setCorreo("");
    setCumpleanos("");

    setError(false);

    enviado();
  };

  const enviado = () => {
    <div>Holi</div>;
  };

  return (
    <>
      <div className=" mx-auto md-flex">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-lg py-5  px-5"
        >
          <div>
            <label className="block text-gray-700 font-medium text-left text-sm">
              NOMBRE COMPLETO
            </label>
            <input
              id="titulo"
              type="text"
              name="name"
              placeholder="Escribe tu nombre"
              className="border-2 rounded-md md p-1 w-full"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />

            <label className="block text-gray-700 font-medium text-left mt-2 text-sm">
              FECHA DE NACIMIENTO
            </label>
            <input
              id="cumpleanos"
              type="date"
              name="fecha"
              className="border-2 rounded-md p-1 w-full"
              value={cumpleanos}
              onChange={(e) => setCumpleanos(e.target.value)}
            />

            <label className="block text-gray-700 font-medium text-left mt-2 text-sm">
              CELULAR
            </label>
            <input
              id="celular"
              type="number"
              name="name"
              placeholder="Escribe tu celular"
              className="border-2 rounded-md md p-1 w-full"
              value={celular}
              onChange={(e) => setCelular(e.target.value)}
            />

            <label className="block text-gray-700 font-medium text-left mt-2 text-sm">
              CORREO
            </label>
            <input
              id="correo"
              type="email"
              name="name"
              placeholder="Escribe tu correo"
              className="border-2 rounded-md md p-1 w-full"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />

            <input
              type="submit"
              className="block bg-violet-700 rounded-lg text-white p-2 mt-2 px-5 mx-auto hover:bg-violet-800 cursor-pointer"
              value="Enviar"
            />
            
          </div>
          
          {error && <Error />}
        </form>
        <div className="bg-white  text-gray-700 font-medium text-sm shadow-xl rounded-lg py-5 px-5 mt-4 w-full">
              <b className="block text-left uppercase">
                NOMBRE COMPLETO: <b className= "text-gray-700 font-medium text-sm">{titulo}</b>{" "}
              </b>
              <b className="block text-left uppercase">
                FECHA DE NACIMIENTO: <b className= "text-gray-700 font-medium text-sm">{cumpleanos}</b>{" "}
              </b>
              <b className="block text-left uppercase">CELULAR: <b className= "text-gray-700 font-medium text-sm">{celular} </b> </b>
              <b className="block text-left uppercase">CORREO: <b className= "text-gray-700 font-medium text-sm">{correo} </b></b>
              
            </div>
      </div>
    </>
  );
};

export default Formulario;
