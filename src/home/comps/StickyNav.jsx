import { useRef, useEffect, useState } from 'react';

import { IonIcon } from '@ionic/react';
import { menuOutline, closeOutline } from 'ionicons/icons';

const StickyNav = props => {
  const stickyNavHeightRef = useRef();

  const [mobNavOpen, setMobNavOpen] = useState(false);

  useEffect(() => {
    props.stickyNavHeightHandler(stickyNavHeightRef.current.offsetHeight);
  }, [props]);

  // close mobile nav
  const toggleNavClose = () => {
    props.stickyNavControllerHandler(!!props.stickyNavController);
  };

  const scrollToElHandler = e => {
    setMobNavOpen(!mobNavOpen);
    props.scrollToElement(e, stickyNavHeightRef);
  };

  const mobNavHandler = () => {
    setMobNavOpen(!mobNavOpen);
    stickyNavHeightRef.current.classList.toggle('nav-open');
  };

  return (
    <nav
      ref={stickyNavHeightRef}
      className="sticky-nav"
      style={{
        transform: props.stickyNavController
          ? 'translateX(0)'
          : 'translateX(-100%)',
      }}
    >
      <img
        onClick={scrollToElHandler}
        href="#"
        src="imgs/ejandtn-logo.png"
        alt="Elijah James And The Nightmares logo"
        className="sticky-nav-logo"
      />

      <ul className="nav-pages sticky-nav-pages">
        <li>
          <a
            onClick={scrollToElHandler}
            className="link link-scroll sticky-nav-link"
            href="#tour"
          >
            Tour
          </a>
        </li>
        <li>
          <a
            onClick={scrollToElHandler}
            className="link link-scroll sticky-nav-link"
            href="#music"
          >
            Music
          </a>
        </li>
        <li>
          <a
            onClick={scrollToElHandler}
            className="link link-scroll sticky-nav-link"
            href="#videos"
          >
            Videos
          </a>
        </li>
        <li>
          <a
            onClick={scrollToElHandler}
            className="link link-scroll sticky-nav-link"
            href="#about"
          >
            About
          </a>
        </li>
        <li>
          <a
            className="link sticky-nav-link"
            href="https://www.elijahjamesandthenightmares.com/shop"
            target="_blank"
            rel="noreferrer noopener"
          >
            Shop
          </a>
        </li>
      </ul>
      <button onClick={toggleNavClose} className="btn-mobile-nav">
        {!mobNavOpen && (
          <IonIcon
            onClick={mobNavHandler}
            className="icon-mobile-nav"
            icon={menuOutline}
          ></IonIcon>
        )}
        {mobNavOpen && (
          <IonIcon
            onClick={mobNavHandler}
            className="icon-mobile-nav"
            icon={closeOutline}
          ></IonIcon>
        )}
      </button>
    </nav>
  );
};

export default StickyNav;
