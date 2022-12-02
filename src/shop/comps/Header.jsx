import { useNavigate } from 'react-router-dom';

import { IonIcon } from '@ionic/react';
import {
  logoFacebook,
  logoTwitter,
  logoYoutube,
  logoInstagram,
  logoApple,
} from 'ionicons/icons';

const Header = props => {
  const navigate = useNavigate();

  const redirect = () => {
    navigate('/');
  };

  return (
    <header className="shop-header-section">
      <img
        src="imgs/ejandtn-logo.png"
        alt="Elijah James And The Nightmares logo"
        className="header-logo"
      />

      <div className="redirect-nav">
        <span className="link redirect-link" onClick={redirect}>
          Go to EJANDTN website
        </span>

        <div className="icon-nav">
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
        </div>
      </div>

      <h1 className="title">Shop</h1>

      <p className="shop-description">
        Welcome to the official Elijah James And The Nightmares ecommerce site.
        Here you can find physical media and various types of merchandise. This
        website was coded by E. J. Mainwaring, and is under constant
        development, so if you have any issues at all using the website, please
        get in touch
        <a className="link" href="mailto:ejandtn@gmail.com">
          HERE
        </a>
        . Otherwise, please click the links below to find the sections of the
        shop that you are looking for.
      </p>

      <ul className="shop-nav">
        <li>
          <a
            onClick={e => props.scrollToElement(e)}
            className="link link-scroll"
            href="#vinyl"
          >
            Vinyl
          </a>
        </li>
        <li>
          <a
            onClick={e => props.scrollToElement(e)}
            className="link link-scroll"
            href="#cd"
          >
            CD
          </a>
        </li>
        <li>
          <a
            onClick={e => props.scrollToElement(e)}
            className="link link-scroll"
            href="#misc"
          >
            Misc
          </a>
        </li>
        <li>
          <a
            onClick={e => props.scrollToElement(e)}
            className="link link-scroll"
            href="#fanzine"
          >
            Fanzine
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
