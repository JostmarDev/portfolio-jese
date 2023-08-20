import React from 'react';
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get in touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everything!</h3>
          <p className="contact__details">Don't like forms? Send me an email</p>
        </div>
        <form action="" className="contact__form" name="contact" method="POST" data-netlify="true">

          <div className="contact__form-div">
            <input
              type="text"
              name='name'
              className="contact__form-input"
              placeholder='insert your name'
            />
          </div>

          <div className="contact__form-div">
            <input
              type="email"
              name="email"
              className="contact__form-input"
              placeholder='insert your email'
            />
          </div>

          <div className="contact__form-div role" >
            <label>Your Role:     </label>
            <select name="position[]" id='format'>
              <option disabled>Select your role</option>
              <option value="recruiter">Recruiter</option>
              <option value="company">Company</option>
              <option value="client">Client</option>
              <option value="other">Other</option>
            </select>
          </div>
            
          <div className="contact__form-div contact__form-area">
            <textarea name="message" id="" cols="30" rows="10" className='contact__form-input' placeholder='Write your message'></textarea>
          </div>

          <button className='btn' type='submit'> Send message</button>

        </form>
      </div>
    </section>
  )
}

export default Contact;
