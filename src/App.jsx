import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { useState } from "react"
import Inicio from "./UI/Inicio"
import Page from "./UI/Page"
import Perguntas from "./UI/Perguntas"
import MainLayout from "./UI/MainLayout"
import Points from "./UI/Statics/Points"  
import Ranking from "./UI/Statics/Ranking"
import PerguntasFutebol from "./UI/Perguntas/PerguntasFutebol"
import Titulos from "./UI/Statics/Titulos"
import Profile from "./Profile/Profile"
import Lost from "./UI/Lost/Lost"
import LostGeral from "./UI/Lost/LostGeral"
import Login from "./UI/Login/Login"
import Cadastro from "./UI/Login/Cadastro"
export default function App(){

 const [primeiraVisita, setPrimeiraVisita] = useState(
    localStorage.getItem("primeiraVisita") !== "true" )
 function primeira () {
 localStorage.setItem("primeiraVisita", "true");
 setPrimeiraVisita(false);
 }
 if (primeiraVisita) {
  return (
    <div className="bg-blue-300 block p-5 gap-10">
      <h1 className=" justify-center font-monospace ">
        QuizBall
      </h1>
      <button onClick={primeira} className="shadow-lg rounded-lg bg-white">Iniciar</button>
    </div>) }

  return(
    
    <div >
      <BrowserRouter>
      <MainLayout>
      <Routes>
        <Route path="/" element={<Navigate to="/inicio" replace />} />
        <Route path="/inicio" element={<Inicio/>}/>
        <Route path="/futebol" element={<PerguntasFutebol/>}/>
        <Route path="/page" element={<Page/>}/>
        <Route path="/lostg" element={<LostGeral/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/lost" element={<Lost/>}/>
        <Route path="/points" element={<Points/>}/>
        <Route path="/ranking" element={<Ranking/>}/>
        <Route path="/titulos" element={<Titulos/>}/>
        <Route path="/perguntas" element={<Perguntas/>}/>
      </Routes>
      </MainLayout>
      </BrowserRouter>
    
    </div>
  )
}