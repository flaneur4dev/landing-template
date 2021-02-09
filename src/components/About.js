import { memo } from 'react';
import Card from './Card';
import { about } from '../data/about.js';

function About() { 
  return (
    <section id="about" className="about">
      <h2 className="about__title">About Us</h2>
      <p className="about__subtitle">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
      <ul className="about__cards">
        {about.map(item => <Card key={item.id} card ={item} />)}
      </ul>
    </section>
  )
}

export default memo(About)
