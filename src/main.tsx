
import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronDown,
  Instagram,
  MapPin,
  Menu,
  Utensils,
  Bus,
  BedDouble,
  Leaf,
  Clock3,
  Heart,
  Camera,
  X,
  ExternalLink,
  Sparkles,
} from 'lucide-react';

import './style.css';

// Configurações e links oficiais
const CONFIG = {
  inscricao:
    'https://docs.google.com/forms/d/e/1FAIpQLSdB6rIuNK2YyOC6c8DIpXnDN3pLbE_IA5SH-dbhW-bB6TDdXQ/viewform?usp=header',
  instagram: 'https://www.instagram.com/acampamento.icpbb/',
  whatsapp: '',
  prazoPagamento: '10 de janeiro de 2027', // Confirmar com a organização
};

// Contagem regressiva
const target = new Date('2027-01-22T00:00:00-03:00').getTime();

function getCountdown() {
  const diff = Math.max(0, target - Date.now());

  return {
    dias: Math.floor(diff / 86400000),
    horas: Math.floor(diff / 3600000) % 24,
    minutos: Math.floor(diff / 60000) % 60,
    segundos: Math.floor(diff / 1000) % 60,
  };
}

function App() {
  const [count, setCount] = useState(getCountdown);
  const [menuOpen, setMenuOpen] = useState(false);
  const [posterOpen, setPosterOpen] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCount(getCountdown());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!posterOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setPosterOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => window.removeEventListener('keydown', onKeyDown);
  }, [posterOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* CABEÇALHO */}
      <header className="header">
        <div className="container nav">
          <a className="brand" href="#inicio" onClick={closeMenu}>
            <span className="brand-mark">
              <img
                src="/images/logo-2.jfif"
                alt="Logo ICPBB Jardim Miriam"
                className="logo-igreja"
              />
            </span>

            <span>
              ICPBB
              <small>JARDIM MIRIAM</small>
            </span>
          </a>

          <nav
            className={`nav-links ${menuOpen ? 'open' : ''}`}
            aria-label="Navegação principal"
          >
            <a href="#sobre" onClick={closeMenu}>Sobre</a>
            <a href="#informacoes" onClick={closeMenu}>Informações</a>
            <a href="#cartaz" onClick={closeMenu}>Cartaz</a>
            <a href="#galeria" onClick={closeMenu}>Galeria</a>

            <a
              className="mobile-signup"
              href={CONFIG.inscricao}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              Inscreva-se
            </a>
          </nav>

          <a
            className="nav-cta"
            href={CONFIG.inscricao}
            target="_blank"
            rel="noopener noreferrer"
          >
            Inscreva-se
            <ArrowRight size={16} />
          </a>

          <button
            className="menu-button"
            type="button"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        {/* PÁGINA INICIAL */}
        <section className="hero" id="inicio">
          <div className="hero-overlay" />

          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">
                <span className="pulse" />
                ACAMPAMENTO ICPBB · 2027
              </div>

              <h1>
                Enraizados
                <em>em Cristo.</em>
              </h1>

              <p className="hero-description">
                Quatro dias de fé, comunhão e experiências
                inesquecíveis na presença de Deus.
              </p>

              <div className="hero-meta">
                <span>
                  <CalendarDays size={19} />
                  22 a 25 de janeiro de 2027
                </span>

                <span>
                  <MapPin size={19} />
                  ICPBB Jardim Miriam
                </span>
              </div>

              <div className="hero-actions">
                <a
                  className="button button-gold"
                  href={CONFIG.inscricao}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Garanta sua inscrição
                  <ArrowRight size={18} />
                </a>

                <a className="button button-outline" href="#sobre">
                  Conheça o evento
                  <ChevronDown size={18} />
                </a>
              </div>

              <p className="hero-verse">
                “Portanto, como vocês receberam Cristo Jesus, o Senhor, continuem a viver nele, 
                enraizados e edificados nele, firmados na fé, como foram ensinados, transbordando de gratidão.”
                <strong> Colossenses 2:6,7</strong>
              </p>
            </div>

            <div className="hero-poster-wrap">
              <img
                className="hero-poster"
                src="/images/Acampamento 2027_ Enraizados em Cristo.png"
                alt="Cartaz oficial do Acampamento Enraizados em Cristo 2027"
              />

              <div className="poster-sticker">
                <Sparkles size={18} />
                Uma experiência especial
              </div>
            </div>
          </div>

          <a className="scroll-hint" href="#sobre">
            DESCUBRA MAIS
            <ChevronDown size={16} />
          </a>
        </section>

        {/* CONTAGEM REGRESSIVA */}
        <section className="countdown-band" aria-label="Contagem regressiva">
          <div className="container countdown-layout">
            <div>
              <span className="kicker">A CONTAGEM JÁ COMEÇOU</span>
              <h2>Nosso encontro está chegando!</h2>
            </div>

            <div className="count-items">
              {Object.entries(count).map(([label, value]) => (
                <div className="count-unit" key={label}>
                  <strong>{String(value).padStart(2, '0')}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOBRE O ACAMPAMENTO */}
        <section className="section about" id="sobre">
          <div className="container about-grid">
            <div className="about-visual">
              <div
                className="about-image"
                role="img"
                aria-label="Árvore com raízes e luz dourada ao entardecer"
              />

              <div className="verse-badge">
                <Leaf size={24} />
                <span>
                  Firmes na fé
                  <br />
                  <strong>Colossenses 2:6-7</strong>
                </span>
              </div>
            </div>

            <div className="about-copy">
              <span className="section-tag">NOSSO PROPÓSITO</span>

              <h2>
                Mais que um acampamento.
                <em> Uma experiência com Deus.</em>
              </h2>

              <p>
                O Acampamento ICPBB Jardim Miriam é um convite
                para sair da rotina e viver dias de comunhão,
                adoração, amizade e crescimento espiritual.
              </p>

              <p>
                Queremos criar raízes profundas na Palavra,
                fortalecer nossa caminhada com Cristo e construir
                memórias que permanecerão muito além desses quatro dias.
              </p>

              <div className="feature-list">
                <span><Check size={18} /> Comunhão e amizades</span>
                <span><Check size={18} /> Crescimento espiritual</span>
                <span><Check size={18} /> Momentos inesquecíveis</span>
              </div>

              <a
                className="text-link"
                href={CONFIG.inscricao}
                target="_blank"
                rel="noopener noreferrer"
              >
                Faça parte dessa história
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* INFORMAÇÕES */}
        <section className="section details" id="informacoes">
          <div className="container">
            <div className="section-heading">
              <span className="section-tag">
                INFORMAÇÕES IMPORTANTES
              </span>

              <h2>
                Prepare-se para
                <em> viver o extraordinário.</em>
              </h2>

              <p>
                Tudo o que você precisa saber antes de fazer
                sua inscrição.
              </p>
            </div>

            <div className="info-grid">
              <article className="info-card">
                <div className="info-icon">
                  <CalendarDays />
                </div>

                <span>QUANDO?</span>
                <h3>22 a 25 de janeiro</h3>
                <p>Quatro dias especiais em 2027.</p>
              </article>

              
              <article className="info-card">
                <div className="info-icon">
                  <Heart />
                </div>

                <span>INVESTIMENTO</span>
                <h3>R$ 400,00</h3>

                <p>
                  Por pessoa, com hospedagem, alimentação
                  e transporte inclusos.
                </p>

                <div className="children-notice">
                  <strong>👶 Atenção aos responsáveis!</strong>
                  <p>
                    Crianças de até 5 anos não pagam.
                    A partir de 6 anos, o valor fica normal.
                  </p>
                </div>
              </article>


              <article className="info-card">
                <div className="info-icon">
                  <MapPin />
                </div>

                <span>ORGANIZAÇÃO</span>
                <h3>ICPBB Jardim Miriam</h3>

                <p>
                  Detalhes sobre o local do acampamento serão
                  informados pela organização.
                </p>
              </article>
            </div>

            <div className="included">
              <div>
                <span className="section-tag">JÁ ESTÁ INCLUSO</span>
                <h3>É só preparar o coração!</h3>
              </div>

              <div className="included-items">
                <span><BedDouble /> Hospedagem</span>
                <span><Utensils /> Alimentação</span>
                <span><Bus /> Transporte</span>
              </div>
            </div>
          </div>
        </section>

        {/* CARTAZ OFICIAL */}
        <section className="section poster-section" id="cartaz">
          <div className="container poster-grid">
            <div>
              <span className="section-tag">CONVITE ESPECIAL</span>

              <h2>
                Um chamado para criar
                <em> raízes mais profundas.</em>
              </h2>

              <p>
                Confira a arte oficial do nosso acampamento
                e compartilhe essa experiência com quem você ama.
              </p>

              <button
                className="button button-dark"
                type="button"
                onClick={() => setPosterOpen(true)}
              >
                Ver cartaz completo
                <ExternalLink size={18} />
              </button>
            </div>

            <button
              className="poster-preview"
              type="button"
              onClick={() => setPosterOpen(true)}
              aria-label="Ampliar cartaz oficial"
            >
              <img
                src="/images/Acampamento 2027_ Enraizados em Cristo.png"
                alt="Cartaz do Acampamento ICPBB Jardim Miriam 2027"
              />
            </button>
          </div>
        </section>

        
      {/* INSCRIÇÕES */}
        <section className="section signup" id="inscricao">
          <div className="container signup-content">
            <span className="section-tag">
              SUA HISTÓRIA CONTINUA AQUI
            </span>

            <h2>
              Vamos crescer
              <em> juntos na fé?</em>
            </h2>

            <p>
              Preencha o formulário oficial para solicitar sua inscrição.
              A vaga será confirmada após a identificação do pagamento
              pela organização.
            </p>

            <div className="signup-action">
              <span className="signup-highlight">
                Garanta sua participação no Acampamento 2027!
              </span>

              <a
                className="button button-gold signup-button"
                href={CONFIG.inscricao}
                target="_blank"
                rel="noopener noreferrer"
              >
                CLIQUE AQUI PARA SE INSCREVER
                <ExternalLink size={20} />
              </a>

              <span className="signup-helper">
                Clique no botão acima para acessar o formulário de inscrição.
              </span>
            </div>

            <p className="signup-note">
              <Clock3 size={16} />
              Prazo de pagamento informado: {CONFIG.prazoPagamento}
              {' '}(confirme com a organização).
            </p>
          </div>
        </section>


        {/* GALERIA */}
        <section className="section gallery" id="galeria">
          <div className="container gallery-grid">
            <div>
              <span className="section-tag">MOMENTOS QUE FICAM</span>

              <h2>
                Memórias para
                <em> guardar no coração.</em>
              </h2>

              <p>
                Após o acampamento, acompanhe fotos, vídeos
                e registros dos nossos melhores momentos
                no Instagram oficial.
              </p>

              <a
                className="text-link"
                href={CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                Acompanhe no Instagram
                <Instagram size={19} />
              </a>
            </div>

            <div className="gallery-card">
              <Camera size={45} />
              <strong>Nossa história está prestes a começar</strong>
              <span>Em breve, fotos e vídeos por aqui.</span>
            </div>
          </div>
        </section>
      </main>

      {/* RODAPÉ */}
      <footer className="footer" id="contato">
        <div className="container footer-main">
          <div>
            <a className="brand" href="#inicio">
              <span className="brand-mark">
              <img
                src="/images/logo-2.jfif"
                alt="Logo ICPBB Jardim Miriam"
                className="logo-igreja"
              />
            </span>

              <span>
                ICPBB
                <small>JARDIM MIRIAM</small>
              </span>
            </a>

            <p>
              Enraizados em Cristo. Unidos em fé,
              comunhão e amor.
            </p>
          </div>

          <div className="footer-links">
            <strong>Navegação</strong>
            <a href="#sobre">Sobre</a>
            <a href="#informacoes">Informações</a>
            <a href="#cartaz">Cartaz</a>
            <a href="#inscricao">Inscrições</a>
          </div>

          <div className="footer-links">
            <strong>Redes sociais</strong>

            <a
              href={CONFIG.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram ↗
            </a>

            {CONFIG.whatsapp && (
              <a
                href={CONFIG.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp ↗
              </a>
            )}
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© 2027 Acampamento ICPBB Jardim Miriam</span>
          <span>Feito com fé e propósito ♡</span>
        </div>
      </footer>

      {/* MODAL DO CARTAZ */}
      {posterOpen && (
        <div
          className="poster-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Cartaz oficial ampliado"
          onClick={() => setPosterOpen(false)}
        >
          <button
            className="modal-close"
            type="button"
            aria-label="Fechar cartaz"
            onClick={() => setPosterOpen(false)}
          >
            <X />
          </button>

          <img
            src="/images/Acampamento 2027_ Enraizados em Cristo.png"
            alt="Cartaz oficial completo do acampamento"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
