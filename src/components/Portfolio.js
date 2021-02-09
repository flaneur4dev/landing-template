import { memo, useEffect, useState } from 'react';
import { portfolio } from '../data/portfolio.js';

function Portfolio() {
  const [cards, setCards] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setCards(portfolio)
  }, [])

  function handleClick({ target }) {
    setFilter(target.name);
    if (target.name === 'all') {
      setCards(portfolio);
      return
    }
    setCards(portfolio.filter(item => item.name === target.name))
  }

  function getGridClass(str) {
    switch (str) {
      case 'all': return ''
      case 'web_design': return 'portfolio__cards_filter_web'
      case 'graphic_design': return 'portfolio__cards_filter_graph'
      case 'flat_design': return 'portfolio__cards_filter_flat'
    }
  }

  return (
    <section id="portfolio" className="portfolio">
      <h2 className="portfolio__title">Portfolio</h2>
      <p className="portfolio__description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>

      <nav className="portfolio__filter" onClick={handleClick}>
        <button type="button" name="all" className="portfolio__button">ALL</button>
        <button type="button" name="web_design" className="portfolio__button">WEB DESIGN</button>
        <button type="button" name="graphic_design" className="portfolio__button">GRAPHIC DESIGN</button>
        <button type="button" name="flat_design" className="portfolio__button">FLAT DESIGN</button>
      </nav>

      <ul className={`portfolio__cards ${getGridClass(filter)}`} >
        {cards.map(item => (
          <li key={item.id} className="portfolio__item">
            <img src={item.image} className="portfolio__card" />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default memo(Portfolio)
