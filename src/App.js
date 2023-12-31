import React from 'react';
import './App.css';
import Sidebar from "./components/sidebar/Sidebar";
import Home from './components/home/Home';
import About from "./components/about/About"
import Pi from './components/pi/Pi';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const App = () => {
  return (
    <>
      <Sidebar />
      <main className='main'> 
      <Home />
      <About />
      <Pi />
      <Resume />
      <Portfolio />
      <Testimonials />
      <Contact />
      </main>
    </>
  );
}

export default App;
