import React from 'react';
import PageLayout from '../components/PageLayout';

const Partner: React.FC = () => {
  return (
    <PageLayout>
      <section className="page-content">
        <h1>Seja um parceiro</h1>
        <p>
          Se sua empresa está em busca de talentos de alta qualidade na área de tecnologia, a DEVagas é o lugar certo para você! Nossa comunidade é composta por profissionais engajados e em busca de novas oportunidades de crescimento.
        </p>
        <p>
          Ao anunciar conosco, suas vagas alcançam uma audiência focada e qualificada, aumentando as chances de encontrar o candidato ideal. Oferecemos um canal direto e eficiente para que você se conecte com os melhores desenvolvedores do mercado.
        </p>
        <p>
          Para saber mais sobre como anunciar suas vagas e quais são as nossas opções de parceria, envie um e-mail para: parceiros@devagas.com.br. Estamos ansiosos para construir essa parceria de sucesso!
        </p>
      </section>
    </PageLayout>
  );
};

export default Partner;