import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="page-content">
      <h1>Contato</h1>
      <p>
        Tem alguma dúvida, sugestão ou apenas quer dizer "oi"? Adoraríamos ouvir
        você! Sua opinião é essencial para aprimorarmos a DEVagas e continuarmos
        a oferecer o melhor serviço possível para nossa comunidade de
        desenvolvedores.
      </p>
      <p>
        Para entrar em contato, envie um e-mail para:{" "}
        <a href="mailto:contato@devagas.com.br">contato@devagas.com.br</a>.
        Nossa equipe se compromete a responder o mais rápido possível, com
        atenção e cuidado para atender às suas necessidades.
      </p>
      <p>
        Estamos sempre prontos para ouvir você, trocar ideias e tornar a
        experiência com a DEVagas cada vez melhor. Seu feedback faz a diferença!
      </p>
    </section>
  );
};

export default Contact;
