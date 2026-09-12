import { useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase/Firebase";
import { Navigate } from "react-router-dom";

const RotaProtegida = ({ children }) => {
    const [carregando, setCarregando] = useState(true)
    const [usuario, setUsuario] = useState(null)

    useEffect (()=>{
      const checkuser = onAuthStateChanged(auth, (user)=>{
        setUsuario(user)
        setCarregando(false)
      })

      return checkuser
    },[])

    if (carregando){
        return <p>Carregando</p>
    }
      if (!usuario) {
    return <Navigate to="/login" replace />;
  }

  return children
}

export default RotaProtegida
