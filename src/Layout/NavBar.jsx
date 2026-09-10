import { Link } from "react-router-dom"
export default function NavBar() {
  return (


    <div className="flex items-center justify-between bg-gradient-to-r from-slate-950 to-blue-700 p-4 gap-6">
      
      
      <Link to='/inicio' 
      className="

      text-2xl 

      font-bold 
      text-blue-500 
      p-8 
      "
      >
        <img src='/icons/iconmain.png' alt="icon" className="w-10 h-10 inline-block mr-2"></img>
        QuizCup
        </Link>
        <Link to='/cadastro' className="w-10 h-10 shrink-0 inline-block mr-2">Cadastar</Link>
        <Link to='/login' className="w-10 h-10 shrink-0 inline-block mr-2">Entrar</Link>
        <Link to='/profile' className="w-10 h-10 shrink-0 inline-block mr-2">
         <img src='/icons/profile.png'></img>
        </Link>
        <Link to='/profile' className="w-10 h-10 shrink-0 inline-block mr-2">
         <img src='/icons/otifs.png'></img>
        </Link>
    </div>
  )
}
