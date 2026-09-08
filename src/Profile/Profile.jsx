const Profile = () => {
  return (
        <main className="profile-page">
            <header className="profile-heading">
                <div>
                    <h1>O meu perfil</h1>
                    <p className="profile-subtitle">Acompanhe o seu desempenho no QuizCup.</p>
                </div>
                <span className="profile-status">Membro ativo</span>
            </header>
            <section className="profile-card" aria-labelledby="profile-name">
                <div className="profile-identity">
                    <div className="profile-avatar-wrap">
                        <img src="/icons/profile.png" alt="Avatar de Venancio Pires" className="profile-avatar" />
                        <span className="profile-online" aria-label="Online"></span>
                    </div>
                    <div>
                        <p className="profile-label">Jogador</p>
                        <h2 id="profile-name">Venancio Pires</h2>
                        <p className="profile-meta">QuizCup desde 2024</p>
                    </div>
                </div>

                <div className="profile-divider"></div>

                <div className="profile-stats" aria-label="Estatisticas do jogador">
                    <div className="profile-stat">
                        <span className="profile-stat-value">590</span>
                        <span className="profile-stat-label">Pontos</span>
                    </div>
                    <div className="profile-stat">
                        <span className="profile-stat-value">7</span>
                        <span className="profile-stat-label">Posicao no ranking</span>
                    </div>
                    <div className="profile-stat">
                        <span className="profile-stat-value">4</span>
                        <span className="profile-stat-label">Trofeus</span>
                    </div>
                </div>
            </section>
        </main>
  )
}

export default Profile
