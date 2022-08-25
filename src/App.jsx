import Formulario from "./Components/Formulario"
import Header from "./Components/Header"
import Error from "./Components/Error"

function App() {
  return (
    <div className="container mx-auto mt-20">
      <Header /> 
      <div className="mt-12 md:flex">
      <Formulario />
      <Error />
      </div>
    </div>
  )
}

export default App
