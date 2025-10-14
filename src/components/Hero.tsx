import React from "react";
import SubscribeCard from "./SubscribeCard";

interface HeroProps {
  showModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ showModal }) => {
  return (
    <main className="main">
      <section className="hero">
        <div className="hero-text">
          <h1>Receba as melhores vagas de tecnologia sem esforço</h1>
          <p>
            A <strong>DEVagas</strong> transforma a sua busca. Nós somos o seu
            atalho para as{" "}
            <strong>melhores oportunidades do mercado de tecnologia</strong>. Em
            vez de procurar, você recebe.
          </p>
          <p>
            Enviamos um compilado de{" "}
            <strong>vagas reais e de alta qualidade</strong> diretamente para o
            seu e-mail. E o melhor de tudo? É <strong>100% gratuito</strong>,
            sem anúncios ou mensagens desnecessárias. Menos tempo de busca, mais
            tempo de foco na sua evolução.{" "}
            <i className="fa-solid fa-heart accent-heart"></i>
          </p>
        </div>
        <SubscribeCard onFormSubmit={showModal} />
      </section>
    </main>
  );
};

export default Hero;
