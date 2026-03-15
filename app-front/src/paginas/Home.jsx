import React from "react";
import { Link } from "react-router-dom";
import MinhaImagem from "../imagens/golden-retriever.jpg";
import "./Home.css";

function Home() {
    return (
        <section className="home-page">
            <div className="hero-panel">
                <div className="hero-copy">
                    <p className="eyebrow">Apresentacao do projeto</p>
                    <h2>Um petshop com cara de sistema real, organizado para impressionar logo na primeira tela.</h2>
                    <p>
                        A ideia aqui e sair da sensacao de CRUD solto e mostrar um produto mais confiavel:
                        navegacao limpa, leitura facil e uma estrutura visual que ajuda qualquer pessoa a
                        entender rapidamente o que o projeto resolve.
                    </p>

                    <div className="hero-actions">
                        <Link className="hero-button-primary" to="/cadastros">
                            Abrir area de operacao
                        </Link>
                        <a
                            className="hero-button-secondary"
                            href="https://www.instagram.com/animaissemteto/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Ver causa parceira
                        </a>
                    </div>

                    <div className="hero-stats">
                        <div className="hero-stat">
                            <strong>3</strong>
                            <span>nucleos principais no fluxo</span>
                        </div>
                        <div className="hero-stat">
                            <strong>100%</strong>
                            <span>layout responsivo nas telas revisadas</span>
                        </div>
                        <div className="hero-stat">
                            <strong>1</strong>
                            <span>experiencia visual mais coesa</span>
                        </div>
                    </div>
                </div>

                <div className="hero-image-card">
                    <img src={MinhaImagem} alt="Golden retriever em destaque na vitrine do petshop" />
                    <div className="hero-image-overlay">
                        <strong>Experiencia mais acolhedora</strong>
                        <span>Imagem, hierarquia e contexto para dar mais valor ao projeto.</span>
                    </div>
                </div>
            </div>

            <div className="home-grid">
                <div>
                    <p className="eyebrow">O que melhora a percepcao</p>
                    <h2 className="section-title">Elementos que fazem o projeto parecer pronto para uso</h2>
                    <p className="section-copy">
                        Quem olha um sistema decide em segundos se ele parece confiavel. Estas melhorias ajudam
                        a contar uma historia melhor sem alterar a base funcional que voce ja tem.
                    </p>

                    <div className="feature-list">
                        <article className="feature-card">
                            <h3>Hierarquia visual mais clara</h3>
                            <p>Titulos, blocos e destaques agora guiam o olhar em vez de competir entre si.</p>
                            <span className="feature-meta">Melhora imediata na apresentacao</span>
                        </article>

                        <article className="feature-card">
                            <h3>Navegacao com intencao</h3>
                            <p>Os acessos principais foram reposicionados para parecerem parte de um produto de verdade.</p>
                            <span className="feature-meta">Mais contexto para recrutadores e clientes</span>
                        </article>

                        <article className="feature-card">
                            <h3>Cadastros com mais leitura</h3>
                            <p>A area operacional fica mais escaneavel com cards, resumos e tabelas melhor organizadas.</p>
                            <span className="feature-meta">Fluxo mais facil de demonstrar</span>
                        </article>
                    </div>
                </div>

                <div className="insight-list">
                    <article className="insight-card">
                        <p className="eyebrow">Posicionamento</p>
                        <h3>O projeto deixa de ser so uma lista de entidades</h3>
                        <p>Agora a interface comunica operacao de petshop: pessoas, animais e produtos conectados pela mesma experiencia.</p>
                    </article>

                    <article className="insight-card">
                        <p className="eyebrow">Portfolio</p>
                        <h3>Melhor para mostrar em entrevista ou entrega</h3>
                        <p>Uma home com narrativa visual e uma area de gestao mais consistente elevam muito a percepcao de qualidade.</p>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default Home;
