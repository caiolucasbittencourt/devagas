import React from 'react';
import PageLayout from '../components/PageLayout';

const About: React.FC = () => {
  return (
    <PageLayout>
      <section className="page-content">
        <h1>Sobre nós</h1>
        <p>
          A DEVagas nasceu da necessidade de simplificar a busca por oportunidades na área de tecnologia. Entendemos a frustração de passar horas em sites de emprego, navegando por vagas irrelevantes e desatualizadas. Nossa missão é transformar essa experiência, entregando um compilado de vagas de alta qualidade diretamente na sua caixa de entrada, de forma gratuita e sem spam.
        </p>
        <p>
          Nosso time é composto por desenvolvedores apaixonados que sabem exatamente o que outros desenvolvedores procuram. Filtramos e curamos as melhores oportunidades do mercado, de startups a grandes corporações, para que você possa focar no que realmente importa: sua carreira e seu desenvolvimento.
        </p>
        <p>
          Acreditamos que a busca por um novo emprego deve ser eficiente e agradável. Junte-se a nós e descubra um jeito mais inteligente de encontrar a sua próxima grande oportunidade.
        </p>
      </section>
    </PageLayout>
  );
};

export default About;