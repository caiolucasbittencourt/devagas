import React from 'react';
import SubscribeCard from './SubscribeCard';

interface HeroProps {
  showModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ showModal }) => {
  return (
    <main className="main">
      <section className="hero">
        <div className="hero-text">
          <h1>Cansado de perder horas procurando vagas?</h1>
          <p>Na <strong>DEVagas</strong>, selecionamos as <strong>melhores oportunidades</strong> de tecnologia e entregamos direto no seu e-mail, <strong>totalmente de graça.</strong></p>
          <p>Nada de spam, nada de anúncios — apenas <strong>vagas reais</strong> para facilitar sua vida. Feito com carinho.<i className="fa-solid fa-heart accent-heart"></i></p>
        </div>
        <SubscribeCard onFormSubmit={showModal} />
      </section>
    </main>
  );
};

export default Hero;