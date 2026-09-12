import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import './login.css'
import { auth } from "../../Firebase/Firebase";
import { signInWithEmailAndPassword} from "firebase/auth";
export default function Login() {

 const [email, setEmail] = useState("")
 const [password, setPassword] = useState("")
 const[error, setError] = useState("")
 const gate = useNavigate()

  async function entrar(event) {
     event.preventDefault(); 
    if (email === ""|| password === ""){
      setError("Preencha os campos");
      return
    }
    try{
      const seek = await signInWithEmailAndPassword(
           auth,
      email,
      password
      )
      console.log(seek.user)
      setError("")
      gate("/inicio")
    } catch (erro){
      setError(erro.message)
    }
   
   }

 return <main className="auth-page">
    <section className="auth-card" aria-labelledby="login-title">
 <Link className="auth-brand" to="/inicio">
 <img src="/icons/iconmain.png" alt="" />QuizCup
 </Link>
 <p className="screen-eyebrow">De volta ao jogo</p>
 <h1 id="login-title">Bem-vindo de volta</h1>
 <p className="screen-description">
    Entre e prepare-se para o próximo desafio.
    </p>
 <form className="login" onSubmit={entrar}>

 <label htmlFor="email">Email</label><input id="email" type="email" autoComplete="email" 
 placeholder="nome@exemplo.com"
  value={email} onChange={e =>
   setEmail(e.target.value)} required />
 <label htmlFor="password">Palavra-passe</label><input id="password" type="password" 
 autoComplete="current-password" 
 placeholder="A sua palavra-passe" 
 value={password} onChange={e => 
 setPassword(e.target.value)} required />
 {error && <p className="error">{error}</p>}
 <button className="screen-button" type="submit">Entrar</button></form>
 <p className="auth-switch">Ainda não tem conta?
     <Link to="/cadastro">Criar conta</Link></p>
     <Link className="screen-back" to="/inicio">
     ← Voltar ao início</Link>
 </section></main>
}