import React from 'react';

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isVisible, onClose }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="modal-overlay is-visible" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" aria-label="Fechar" onClick={onClose}>&times;</button>
        <h2>Obrigado por se inscrever!</h2>
        <p>Fique de olho na sua caixa de entrada.</p>
      </div>
    </div>
  );
};

export default Modal;