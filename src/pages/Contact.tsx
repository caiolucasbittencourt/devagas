import React from 'react';
import PageLayout from '../components/PageLayout';

const Contact: React.FC = () => {
  return (
    <PageLayout>
      <section className="page-content">
        <h1>Contato</h1>
        <p>
          Tem alguma dúvida, sugestão ou apenas quer dizer "oi"? Adoraríamos ouvir você! Sua opinião é super importante para aprimorarmos a DEVagas e continuarmos a oferecer o melhor serviço.
        </p>
        <p>
          Para entrar em contato, por favor, envie um e-mail para: contato@devagas.com.br. Responderemos o mais rápido possível.
        </p>
        <p>
          Você também pode nos encontrar nas redes sociais:
          <ul>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Discord</a></li>
            <li><a href="https://www.linkedin.com/in/caiolucasbittencourt/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://github.com/caiolucasbittencourt" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          </ul>
        </p>
      </section>
    </PageLayout>
  );
};

export default Contact;