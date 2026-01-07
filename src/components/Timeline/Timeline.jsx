import React from 'react';
import { motion } from 'framer-motion';
import Polaroid from '../Polaroid/Polaroid';
import './Timeline.css';

const Timeline = ({ memorias }) => {
  return (
    <div className="timeline-container">
      {/* A "linha" central - pode ser um barbante ou costura */}
      <div className="timeline-line" />

      {memorias.map((item, index) => (
        <motion.div 
          key={item.id}
          className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
          initial={{ opacity: 0, y: 50, rotate: index % 2 === 0 ? -10 : 10 }}
          whileInView={{ opacity: 1, y: 0, rotate: item.rotation || 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        >
          {/* Ponto de conexão na linha */}
          <div className="timeline-dot">
            <span className="dot-inner">❤</span>
          </div>

          <div className="timeline-content">
            <Polaroid 
              image={item.imagem}
              caption={item.titulo}
              date={item.data}
              rotation={item.rotation}
            />
            {/* Texto extra opcional fora da Polaroid */}
            <p className="extra-text">{item.texto}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;