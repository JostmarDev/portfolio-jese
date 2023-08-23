import React, { useRef, useState } from 'react';
import "./contact.css";
import emailjs from '@emailjs/browser';
import Modal from 'react-modal';
import ModalComponent from './ModalComponent';

Modal.setAppElement('#root');


const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [isMessageVisible, setIsMessageVisible] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userMessage, setUserMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    if (!userName || !userEmail || !selectedRole || !userMessage) {
      setMessage('Por favor, completa todos los campos obligatorios.');
      return;
    }

    emailjs.sendForm('service_jostmardev', 'template_fmhe6l6', form.current, 'E1zVZbMLG4I3xRUae')
      .then((result) => {
        console.log(result.text);
        setMessage('¡Tu mensaje ha sido enviado con éxito!  Me pondré en contacto lo más pronto posible');
        setIsSent(true);
        setIsMessageVisible(true);
        setUserName('');
        setUserEmail('');
        setUserMessage('');
        setSelectedRole('');
      }, (error) => {
        console.log(error.text);
        setMessage('Error al enviar el mensaje. Inténtalo de nuevo más tarde.');
      });
  };

  const closeModal = () => {
    setIsMessageVisible(false);
  };
  const roles = [
    "recruiter",
    "company",
    "client",
    "other"
  ];

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value); // Actualiza el estado con el valor seleccionado
  };

  return (

    <section className="contact container section" id="contact">
        <ModalComponent
        isOpen={isMessageVisible}
        onRequestClose={closeModal}
        message={message}
      />

      <h2 className="section__title">Get in touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everything!</h3>
          <p className="contact__details">Don't like forms? Send me an email</p>
        </div>
        <form ref={form} onSubmit={sendEmail} className="contact__form">

          <div className="contact__form-div">
            <input
              type="text"
              name="user_name"
              className="contact__form-input"
              placeholder='insert your name'
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>

          <div className="contact__form-div">
            <input
              type="email"
              name="user_email"
              className="contact__form-input"
              placeholder='insert your email'
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              required
            />
          </div>

          <div className="contact__form-div role">
            <label>Your Role: </label>
            <select
              name='user_role'
              id='format'
              value={selectedRole}
              onChange={handleRoleChange}
              required
            >
              <option value="">Select your role</option>
              {roles.map((role) => (
                <option key={role} value={role}>
                  {role.charAt(0).toUpperCase() + role.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea
              name="message"
              className='contact__form-input'
              placeholder='Write your message'
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              required
              rows="4"
            ></textarea>
          </div>
          <input className='btn' type="submit" value="Send message" />
        </form>

      </div>
    </section>
  )
}

export default Contact;
