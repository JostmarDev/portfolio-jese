import React from 'react';
import Modal from 'react-modal';

const ModalComponent = ({ isOpen, onRequestClose, message }) => {
  
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Mensaje de Éxito"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1000,
        },
        content: {
          display: 'flex',
          flexDirection: 'column', 
          justifyContent: 'center',
          textAlign: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          border: 'none',
          borderRadius: '8px',
          maxWidth: '70%',
          width: '50%',
          maxHeight: '25%',
          height: '50%',
          margin: 'auto',
          padding: '20px',
        }
      }}
    >
      <p>{message}</p>
      <div className='modal__btn'>
        <button className="btn" onClick={onRequestClose}>OK</button>
      </div>
    </Modal>
  );
};

export default ModalComponent;
