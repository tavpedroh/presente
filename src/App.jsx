import React from 'react';
import Background from './components/Background/Background.jsx';
import Timeline from './components/Timeline/Timeline';
import { memoriasData } from './data/memorias';
import './App.css';

function App() {
  return (
    <Background>
      {/* Cabeçalho do Scrapbook */}
      <header className="scrapbook-header">
        <h1 className="main-title">Nossa História</h1>
        <div className="subtitle-container">
          <p className="subtitle">Desde 14 de outubro de 2025</p>
          <div className="decoration-line">✨❤✨</div>
        </div>
      </header>

      {/* A Timeline com os nossos dados */}
      <Timeline memorias={memoriasData} />

      {/* Rodapé Simples */}
      <footer className="scrapbook-footer">
        <p>E isso é só o começo...</p>
        <p className="signature">Com amor, Pedro</p>
      </footer>
    </Background>
  );
}

export default App;