import React from "react"

function Footer() {
    return (
      <footer className="footer">
          <a href='https://vk.com/thebarbakov' className="footer__text">
            © {new Date().getFullYear()} Yaroslav Barbakov
          </a>
          <a href='https://vk.com/jaroslava2004' className="footer__text">
            info Yaroslava Klimacheva
          </a>
      </footer>
    );
}

export default Footer