import './App.css';

function App() {
    return (
        <div className="app">
            <header className="hero">
                <h1>Minions Bundle: Portfolio</h1>
                <p className="tagline">Top-level structural organizational bundle — categories, ecosystems, projects</p>
                <div className="cta-buttons">
                    <a href="https://docs.minions.wtf" className="btn btn-primary">
                        Documentation
                    </a>
                    <a href="https://github.com/mxn2020/minions-bundles-portfolio" className="btn btn-secondary">
                        GitHub
                    </a>
                </div>
            </header>

            <main className="content">
                <section className="features">
                    <div className="feature-card">
                        <h3>TypeScript SDK</h3>
                        <code>npm install @minions-bundles-portfolio/sdk</code>
                    </div>
                    <div className="feature-card">
                        <h3>Python SDK</h3>
                        <code>pip install minions-bundles-portfolio</code>
                    </div>
                    <div className="feature-card">
                        <h3>CLI Tool</h3>
                        <code>npm install -g @minions-bundles-portfolio/cli</code>
                    </div>
                </section>
            </main>

            <footer className="footer">
                <p>
                    Built on the{' '}
                    <a href="https://github.com/mxn2020/minions">Minions SDK</a>
                </p>
            </footer>
        </div>
    );
}

export default App;
