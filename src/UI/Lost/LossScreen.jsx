import { Link } from "react-router-dom"
export default function LossScreen({ restart, category }) {
 return <main className="result-page">
    <section className="result-card" aria-labelledby="result-title">
 <div className="screen-icon"><img src="/icons/crono.png" alt="" />
 </div><p className="screen-eyebrow">Fim da partida · {category}</p>
 <h2 id="result-title">Você perdeu, Otário.</h2>
 <div className="result-actions">
    <Link className="screen-button" to={restart}>
    Tentar novamente ↗
    </Link>
    <Link className="screen-button secondary" to="/inicio">Voltar ao início
    </Link>
    </div>
 </section>
 </main>
}