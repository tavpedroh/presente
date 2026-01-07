import React from 'react';
import './Background.css';

const Background = ({ children }) => {
  return (
    <div className="main-background">
      {/* Overlay para dar um aspecto de papel amassado ou textura de fibra */}
      <div className="paper-texture-overlay" />
      
      {/* O conteúdo do site (título, timeline, etc) entra aqui */}
      <main className="content-wrapper">
        {children}
      </main>
      
      {/* Detalhe rústico: uma borda "queimada" ou vinheta */}
      <div className="vignette" />
    </div>
  );
};

export default Background;