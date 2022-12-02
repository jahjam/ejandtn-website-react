import { useState } from 'react';

import PrivacyPolicy from './footerLinks/PrivacyPolicy';
import Shipping from './footerLinks/Shipping';
import Contact from './footerLinks/Contact';

const Footer = () => {
  const [footerModalOpen, setFooterModalOpen] = useState(false);
  const [modalSelect, setModalSelect] = useState(null);

  const openModalHandler = e => {
    setModalSelect(e.target.dataset.title);
    setFooterModalOpen(!footerModalOpen);
  };

  const closeModalHandler = e => {
    setModalSelect(null);
    setFooterModalOpen(!footerModalOpen);
  };

  return (
    <>
      <footer className="footer">
        <img
          src="imgs/ejandtn-logo.png"
          alt="Elijah James And The Nightmares logo"
          className="header-logo logo-footer"
        />

        <div className="footer-links">
          <span
            onClick={openModalHandler}
            data-title="privacy"
            className="link link-open"
          >
            Privacy Policy
          </span>
          <span>-</span>
          <span
            onClick={openModalHandler}
            data-title="shipping"
            className="link link-open"
          >
            Shipping Info
          </span>
          <span>-</span>
          <span
            onClick={openModalHandler}
            data-title="contact"
            className="link link-open"
          >
            Contact
          </span>
        </div>
      </footer>

      {modalSelect === 'privacy' && (
        <PrivacyPolicy
          closeModalHandler={closeModalHandler}
          footerModalOpen={footerModalOpen}
        />
      )}
      {modalSelect === 'shipping' && (
        <Shipping closeModalHandler={closeModalHandler} />
      )}
      {modalSelect === 'contact' && (
        <Contact closeModalHandler={closeModalHandler} />
      )}
    </>
  );
};

export default Footer;
