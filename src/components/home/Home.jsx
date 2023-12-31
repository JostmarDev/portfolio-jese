import React from 'react';
import "./home.css";
import Me from "../../assets/a2.svg";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
  return (
    <section className="home container" id="home">

      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Jese Jostmar</h1>
        <span className="home__education">I'm a software development engineering student</span>

        <HeaderSocials />

        <a href="#contact" className="btn">Hire me</a>
        <ScrollDown />

      </div>

      <Shapes />

    </section>
  )
}

export default Home