import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <small className="footer__small">@2021 Natalia_Migallón</small>
      <span className="footer__line">|</span>
      <p className="footer__github">Visit my projects at</p>
      <a
        href="https://github.com/NataliaMigallon"
        title="Link to NataliaMigallón GitHub"
        target="_blank"
        className="github"
      >
        <i className="fab fa-github"></i>
      </a>
    </footer>
  );
};

export default Footer;
