import { Link } from "react-router-dom"
import NavBar from "../Layout/NavBar"
import Page from "./Page"
import Footer from "../Layout/Footer"

const Inicio = () => {

  return (
    <div>
      <NavBar/>
      <Page/>
      <div className="grid grid-cols-2 gap-20 p-4 m-4 items-center justify-center">
      <Link 
      to='/perguntas' 
      className="
      text-white 
      bg-gray-200
      mt-10
      rounded-lg 
      text-center

      "
      >
        <img src='/icons/geral.png' className="w-[60%]"></img>

         </Link> 
      <Link 
      to='/futebol' 
      className="
      text-white 
      mt-10
      p-4 bg-gray-200 
      
      rounded-lg 

      text-center

      "
      >
        <img src='/icons/futebol.png' className="w-[60%]"></img>


         </Link> 

      </div>
      <Footer/>
      
    </div>
  )
}

export default Inicio
