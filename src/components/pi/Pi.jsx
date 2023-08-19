import React from 'react';
import "./pi.css";
import Image1 from "../../assets/En1.svg"
import Image2 from "../../assets/tech1.svg"
import Image3 from "../../assets/gaming.svg"

const data = [
  {
    id: 1,
    image: Image1,
    title: "Exploring in English",
    description:
      "My constant quest for knowledge goes beyond code. By learning English, I can immerse myself in technical documentation, follow the latest technology trends, and access a global community of developers.",
  },
  {
    id: 2,
    image: Image2,
    title: "Technology in My DNA",
    description:
      "Technology and creativity intertwine in my life. My love for video games and technological exploration merge to create unique solutions in web development, where each project is an adventure in itself.",
  },
  {
    id: 3,
    image: Image3,
    title: "Passion for Video Games",
    description:
      "You can use an image that combines elements of technology and creativity, such as a screen with code and iconic elements from video games.",
  },
];

const Pi = () => {
  return (
    <section className="pi container section" id="pi">
      <h2 className="section__title">Passions and Interests</h2>
      <div className="pi__container grid">
        {data.map(({ id, image, title, description }) => { 
          return (
            <div className="pi__card" key= {id}>
              <img src={image} alt="" className="pi__img" />

              <h3 className="pi__title">{title}</h3>
              <p className="pi__description">{description}</p>
            </div>
          )
        })}
      </div>
    </section >
  ); 
};

export default Pi