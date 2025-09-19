import React from 'react';

interface SubscribeCardProps {
  onFormSubmit: () => void;
}

const SubscribeCard: React.FC<SubscribeCardProps> = ({ onFormSubmit }) => {
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        onFormSubmit();
        form.reset();
      } else {
        alert("Oops! Houve um problema ao enviar sua inscrição.");
      }
    } catch (error) {
      alert("Oops! Houve um problema de conexão.");
    }
  };

  return (
    <div className="subscribe-card">
      <div className="subscribers">
        <svg className="icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.4 16.8L5 15.4l4-4-4-4L6.4 6l5.4 5.4-5.4 5.4zm7.6 1.2h-5v-2h5v2z" />
        </svg>
        <span>Junte-se a mais de 30.000 desenvolvedores</span>
      </div>
      <form action="https://formspree.io/f/mdklorbz" method="POST" className="subscribe-form" onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="seuemail@exemplo.com.br" required />
        <button type="submit">Quero receber vagas</button>
      </form>
      <p className="subscribe-info">Vagas todo dia. Sem spam. <a href="#">Cancele quando quiser</a>.</p>
    </div>
  );
};

export default SubscribeCard;