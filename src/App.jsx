import StatCard from './components/StatCard';
import './styles.css';
import tankVideo from './assets/tank-hero.mp4';
import logo from './assets/logo.png';

const stats = [
  {
    value: 'BW STATS',
    label: 'Player statistics',
    hint: 'Track your World of Tanks progress with progression graphs and interval-based statistics.'
  },
  {
    value: 'WN8',
    label: 'Performance rating',
    hint: 'Calculate popular WN8 ratings for players and vehicles, both overall and across different periods.'
  },
  {
    value: 'HANGAR TOOLS',
    label: 'Utility features',
    hint: 'Use lightweight hangar-focused tools designed to improve visibility and gameplay workflow.'
  }
];

export default function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <a
          className="logo-wrap"
          href="https://www.bwstats.org"
          target="_blank"
          rel="noreferrer"
          aria-label="BWSTATS homepage"
        >
          <img src={logo} alt="BWSTATS logo" className="logo-img" />
        </a>

        <a className="site-link" href="#" rel="noreferrer">
          WGMods Portal
        </a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <span className="eyebrow">World of Tanks statistics mod</span>

            <h1>
              BW STATS &amp;
              <br />
              HANGAR TOOLS
            </h1>

            <p>
              The lightest modification for World of Tanks. Track your progress with
              progression graphs and time-based statistics. Calculate WN8 for players
              and vehicles, both overall and across different intervals.
            </p>

            <div className="hero-actions">
              <a className="primary-btn" href="#products">
                Download BW STATS
              </a>
              <a className="secondary-btn" href="#products">
                Download Hangar Tools
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="glow-ring glow-ring-blue" />
            <div className="glow-ring glow-ring-red" />

            <div className="hero-media-wrap">
              <video
                className="hero-video"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              >
                <source src={tankVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </section>

        <section className="stats-section" id="products">
          <div className="section-heading narrow">
            <span className="section-kicker">Main products</span>
            <h2>BW STATS and Hangar Tools</h2>
            <p>
              Lightweight tools for player statistics, WN8 tracking, progression graphs,
              and useful hangar enhancements.
            </p>
          </div>

          <div className="stats-grid">
            {stats.map((item) => (
              <StatCard key={item.label} {...item} />
            ))}
          </div>
        </section>

        <section className="cta-section">
          <div>
            <span className="section-kicker">Downloads</span>
            <h2>Get BWSTATS for World of Tanks</h2>
            <p>
              Download BW STATS and Hangar Tools from the official BWSTATS portal.
              Built as a lightweight mod with performance tracking and hangar tools.
            </p>
          </div>

          <div className="cta-actions">
            <a
              className="primary-btn"
              href="https://www.bwstats.org"
              target="_blank"
              rel="noreferrer"
            >
              Download BW STATS
            </a>
            <a
              className="secondary-btn"
              href="https://www.bwstats.org"
              target="_blank"
              rel="noreferrer"
            >
              Download Hangar Tools
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand">
          <a
            className="footer-logo-wrap"
            href="https://www.bwstats.org"
            target="_blank"
            rel="noreferrer"
            aria-label="BWSTATS homepage"
          >
            <img src={logo} alt="BWSTATS logo" className="footer-logo-img" />
          </a>

          <p>
            BW STATS &amp; HANGAR TOOLS — lightweight World of Tanks mod portal.
          </p>
        </div>

        <a href="https://www.bwstats.org" target="_blank" rel="noreferrer">
          www.bwstats.org
        </a>
      </footer>
    </div>
  );
}