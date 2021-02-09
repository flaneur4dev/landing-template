import { memo } from "react";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        {`© Copyright ${new Date().getFullYear()} Bla Bla Studio | One Page Flat Template`}
      </p>
      <a href="#header" className="footer__link"></a>
    </footer>
  )
}

export default memo(Footer)
