import { memo } from "react";

function Form() {
  return (
    <form className="form">
      <fieldset className="form__input-container">
        <input type="text" className="form__input" placeholder="Your name" />
        <input type="email" className="form__input" placeholder="Your email" />
      </fieldset>
      <textarea className="form__input form__input_el_textarea" placeholder="Your message" />
      <button type="submit" className="form__submit">SUBMIT</button>
    </form>
  )
}

export default memo(Form)
