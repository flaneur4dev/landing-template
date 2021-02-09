import { memo, useEffect } from "react";
import Form from "./Form";
import { init } from "../api/apiYMaps";

function Contact() {
  useEffect(() => {
    // window.onload = () => ymaps.ready(init)
    window.ymaps.ready(init)
  }, [])

  return (
    <section id="contact" className="contact">
      <h2 className="contact__title">Contact Us</h2>
      <p className="contact__subtitle">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
      <div className="contact__wrapper">
        <Form />
        <div id="map" className="contact__map" />
      </div>

    </section>
  )
}

export default memo(Contact);
