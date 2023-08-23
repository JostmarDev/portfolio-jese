import React from 'react';
import "./about.css";
import Img from "../../assets/about-me.svg";
import AboutBox from './AboutBox';

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me - Daily Balance</h2>

      <div className="about__container grid">
        <img src={Img} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">Passionate about ever-evolving technology, I'm currently pursuing a degree in Software Development Engineering at UNADM. With a strong grasp of the MERN stack and a continuous learning mindset, I'm ready to enthusiastically contribute my IT skills. At 22 years old, I'm poised to make meaningful contributions in the field.</p>
            <a href="https://drive.google.com/file/d/1kL_oGkXvuDiFyTQSr8ZvemxEVLWQPMBA/view?usp=sharing" className="btn" rel="noopener noreferrer">Download CV</a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">programming</h3>
                <span className="skills__number">45%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage programming"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">learning</h3>
                <span className="skills__number">35%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage learning"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">technology</h3>
                <span className="skills__number">10%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage technology"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Videogames</h3>
                <span className="skills__number">10%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage videogames"></span>
              </div>

            </div>
          </div>

        </div>
      </div>

      <AboutBox />
    </section>
  )
}

export default About