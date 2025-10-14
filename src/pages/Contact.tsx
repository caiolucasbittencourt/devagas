import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="page-content">
      <h1>Fale conosco</h1>
      <p>
        Este é o seu canal direto com a equipe DEVagas. Acreditamos que a
        comunicação é a chave para construir uma comunidade forte e uma
        plataforma cada vez melhor. Por isso,{" "}
        <strong>sua voz é fundamental para nós</strong>.
      </p>

      <ul>
        <li>
          <strong>Feedback e Sugestões:</strong> Tem uma ideia para uma nova
          funcionalidade? Acha que podemos melhorar a forma como apresentamos as
          vagas? <strong>Sua opinião nos ajuda a evoluir</strong> e a construir
          a plataforma que você realmente quer usar.
        </li>
        <li>
          <strong>Dúvidas Gerais:</strong> Se algo não ficou claro sobre nosso
          funcionamento, sobre a curadoria das vagas ou qualquer outro ponto,
          não hesite em perguntar. Estamos aqui para ajudar a tornar sua
          experiência o mais transparente possível.
        </li>
        <li>
          <strong>Suporte:</strong> Encontrou algum problema técnico, um link
          quebrado ou notou algo estranho? Por favor, nos avise! Sua ajuda é
          essencial para{" "}
          <strong>mantermos a qualidade e a segurança do nosso serviço</strong>.
        </li>
      </ul>

      <p>
        Para qualquer um desses motivos, ou simplesmente para dizer "oi", o{" "}
        <strong>principal canal de comunicação</strong> é o nosso e-mail.
        Centralizamos nosso atendimento para garantir que nenhuma mensagem seja
        perdida.
      </p>

      <p>
        Envie sua mensagem para:{" "}
        <a href="mailto:contato@devagas.com.br">contato@devagas.com.br</a>
      </p>

      <p>
        Nossa equipe se compromete a ler e{" "}
        <strong>
          responder a todas as mensagens com a máxima atenção e o mais rápido
          possível
        </strong>
        . Juntos, podemos construir a melhor e mais confiável fonte de vagas
        para desenvolvedores. <strong>Seu contato faz a diferença!</strong>
      </p>
    </section>
  );
};

export default Contact;
