import { memo } from 'react';

function Intro() {
  return (
    <section className="intro">
      <h1 className="intro__title">We Build <span className="intro__title-strong">Brand</span></h1>
      <p className="intro__subtitle">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
      <button type="button" className="intro__button">LEARN MORE</button>
      <div className="intro__arrow" />
    </section>
  )
}

export default memo(Intro)
