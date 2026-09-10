import { Link, NavLink } from "react-router-dom"
import NavBar from "../../Layout/NavBar"
export default function StatsPage({ title, description, icon, message }) {
 return <div><NavBar /><main className="stats-page">
 <Link className="screen-back" to="/inicio">← Voltar ao início</Link>
 <header className="stats-heading"><p className="screen-eyebrow">O seu percurso</p><h1>{title}</h1><p className="screen-description">{description}</p></header>
 <nav className="stats-tabs" aria-label="Estatísticas"><NavLink to="/points">Pontos</NavLink><NavLink to="/ranking">Ranking</NavLink><NavLink to="/titulos">Títulos</NavLink></nav>
 <section className="empty-card"><div className="screen-icon"><img src={icon} alt="" /></div><h2>{message}</h2><p>Estes dados ainda não estão disponíveis. Entretanto, explore os desafios e teste os seus conhecimentos.</p><Link className="screen-button" to="/inicio">Escolher um desafio →</Link></section>
 </main></div>
}