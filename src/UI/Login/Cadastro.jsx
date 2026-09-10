import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { auth } from "../../Firebase/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Cadastro() {
  const [email, setEmail] = useState("");
  const [pais, setPais] = useState("Angola");
  const [password, setPassword] = useState("");
  const [rightPassword, setRightPassword] = useState("");
  const[error, setError] = useState("")
  const gate = useNavigate();

  const diferentes =
  rightPassword !== "" &&
  password !== rightPassword;
  

 async function buscar(e){
  e.preventDefault()

  if(!password || !email || !pais || !rightPassword){
    setError("Preencha todos os campos")
    return;
  }
  if(password !== rightPassword){
    setError("As password não coincidem")
    return;
  }

  try{

    const seek = await createUserWithEmailAndPassword (
        auth,
         email,
         password
    )
  

  console.log(seek.user)

  setError ("");

    gate("/inicio");
  
 } catch (erro){
    console.log(erro);

    setError(erro.message);
    
 }

 }
  return (
    <main className="auth-page">
      <section className="auth-card" aria-labelledby="cadastro-title">
        <Link className="auth-brand" to="/inicio">
          <img src="/icons/iconmain.png" alt="" />
          QuizCup
        </Link>
        <p className="screen-eyebrow">O desafio começa aqui</p>
        <h1 id="cadastro-title">Crie a sua conta</h1>
        <p className="screen-description">
          Prepare-se para testar os seus conhecimentos.
        </p>
        <form className="login" onSubmit={buscar}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="nome@exemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="password">Palavra-passe</label>
          <input
            id="password"
            type="password"
            autoComplete="new-password"
            placeholder="Crie uma palavra-passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label htmlFor="confirm-password">Confirmar palavra-passe</label>
          <input
            id="confirm-password"
            type="password"
            autoComplete="new-password"
            placeholder="Repita a palavra-passe"
            value={rightPassword}
            onChange={(e) => setRightPassword(e.target.value)}
            aria-invalid={diferentes}
            aria-describedby="password-feedback"
            required
          />
          <p
            id="password-feedback"
            className={diferentes ? "form-feedback is-error" : "form-feedback"}
            aria-live="polite"
          >
            {rightPassword
              ? diferentes
                ? "As palavras-passe não coincidem."
                : "As palavras-passe coincidem."
              : "Repita a palavra-passe para confirmar."}
          </p>
          <label htmlFor="pais">País</label>
          <select
            id="pais"
            autoComplete="country-name"
            value={pais}
            onChange={(e) => setPais(e.target.value)}
          >
            {["Angola", "Brasil", "Portugal", "Moçambique", "Índia"].map(
              (nome) => (
                <option key={nome}>{nome}</option>
              ),
            )}
          </select>
   
          {error && (
  <p className="form-feedback is-error">
    {error}
  </p>
)}
          <button className="screen-button" type="submit">
            Criar conta
          </button>
        </form>
        <p className="auth-switch">
          Já tem conta? <Link to="/login">Entrar</Link>
        </p>
        <Link className="screen-back" to="/inicio">
          ← Voltar ao início
        </Link>
      </section>
    </main>
  );
}
