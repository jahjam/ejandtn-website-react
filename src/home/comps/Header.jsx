import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IonIcon } from '@ionic/react';
import {
  logoFacebook,
  logoTwitter,
  logoYoutube,
  logoInstagram,
  logoApple,
} from 'ionicons/icons';

import StickyNav from './StickyNav';

const Header = () => {
  const headerRef = useRef();
  const navigate = useNavigate();
  const [stickyNavHeight, setStickyNavHeight] = useState(null);
  let [stickyNavOpen, setStickyNavOpen] = useState(false);

  const redirect = () => {
    navigate('/shop');
  };

  function scrollToElement(e, refEl) {
    e.preventDefault();

    const href = e.target.getAttribute('href');

    if (href === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      return;
    }

    const element = document.querySelector(href);

    const elementPosition = element.getBoundingClientRect().top;

    const scrollTo = elementPosition + window.pageYOffset - stickyNavHeight;

    if (href !== '#' && href.startsWith('#')) {
      window.scrollTo({
        top: scrollTo,
        behavior: 'smooth',
      });
    }

    if (stickyNavOpen) {
      setStickyNavOpen(!!stickyNavOpen);
    }

    if (refEl.current.classList.contains('nav-open')) {
      refEl.current.classList.toggle('nav-open');
    }
  }

  const [headerObserver, setheaderObserver] = useState(null);

  useEffect(() => {
    setheaderObserver(
      new IntersectionObserver(
        function (entries) {
          const [entry] = entries;
          entry.isIntersecting === false
            ? setStickyNavOpen(true)
            : setStickyNavOpen(false);
        },
        { root: null, threshold: 0, rootMargin: `-${stickyNavHeight || 0}px` }
      )
    );
  }, [stickyNavHeight]);

  if (headerObserver) headerObserver.observe(headerRef.current);

  return (
    <>
      <header ref={headerRef} className="header">
        <div className="section-header">
          <nav className="main-nav">
            <img
              src="imgs/ejandtn-logo.png"
              alt="Elijah James And The Nightmares logo"
              className="header-logo"
            />

            <ul className="nav-pages">
              <li>
                <a
                  onClick={scrollToElement}
                  className="link link-scroll"
                  href="#tour"
                >
                  Tour
                </a>
              </li>
              <li>
                <a
                  onClick={scrollToElement}
                  className="link link-scroll"
                  href="#music"
                >
                  Music
                </a>
              </li>
              <li>
                <a
                  onClick={scrollToElement}
                  className="link link-scroll"
                  href="#videos"
                >
                  Videos
                </a>
              </li>
              <li>
                <a
                  onClick={scrollToElement}
                  className="link link-scroll"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li>
                <span className="link" onClick={redirect}>
                  Shop
                </span>
              </li>
            </ul>

            <ul className="nav-icons">
              <li>
                <a
                  className="icon-link"
                  href="https://www.facebook.com/EJANDTN"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <IonIcon className="icon" icon={logoFacebook}></IonIcon>
                </a>
              </li>
              <li>
                <a
                  className="icon-link"
                  href="https://www.youtube.com/channel/UCL_coC_N5kLJ-AcbMh3I_fg"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <IonIcon className="icon" icon={logoYoutube}></IonIcon>
                </a>
              </li>
              <li>
                <a
                  className="icon-link"
                  href="https://www.instagram.com/ejandtn/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <IonIcon className="icon" icon={logoInstagram}></IonIcon>
                </a>
              </li>
              <li>
                <a
                  className="icon-link"
                  href="https://open.spotify.com/artist/7lw3bqd3rCmIYcpy6PnNor?si=LOx3w-k8QfG_Lh5FTb2_Jw"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    className="icon"
                    src="imgs/Spotify-Icon-Black-Logo.wine.svg"
                    alt="Spotify SVG Logo"
                  />
                </a>
              </li>
              <li>
                <a
                  className="icon-link"
                  href="https://music.apple.com/gb/artist/elijah-james-and-the-nightmares/1271334018"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <IonIcon className="icon" icon={logoApple}></IonIcon>
                </a>
              </li>
              <li>
                <a
                  className="icon-link"
                  href="https://twitter.com/EJANDTN"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <IonIcon className="icon" icon={logoTwitter}></IonIcon>
                </a>
              </li>
            </ul>
          </nav>

          <div className="header-container">
            <div className="header-container-inner">
              <div className="header-text">
                Debut Double Album <br />
                'Because I'm A Giant' <br />
                Out Now
              </div>
              <button
                href="#music"
                onClick={scrollToElement}
                className="btn listen-btn"
              >
                Listen
              </button>
              <span
                onClick={redirect}
                target="_blank"
                rel="noreferrer noopener"
              >
                <button className="btn buy-btn">Buy Here</button>
              </span>
            </div>
          </div>
        </div>
      </header>

      <StickyNav
        stickyNavHeightHandler={setStickyNavHeight}
        stickyNavController={stickyNavOpen}
        stickyNavControllerHandler={setStickyNavOpen}
        scrollToElement={scrollToElement}
      />
    </>
  );
};

export default Header;
