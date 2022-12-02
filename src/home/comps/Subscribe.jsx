import { IonIcon } from '@ionic/react';
import {
  logoFacebook,
  logoTwitter,
  logoYoutube,
  logoInstagram,
  logoApple,
} from 'ionicons/icons';

const Subscribe = () => {
  return (
    <section className="subscribe-section section-seperator">
      <h1 className="form-header">Subscribe</h1>

      <form className="subscribe-form" name="subscribe">
        <input type="hidden" name="form-name" value="subscribe" />
        <ul className="form">
          <li>
            <input
              type="text"
              name="first-name"
              placeholder="First Name"
              className="form-input"
              required
            />
          </li>
          <li>
            <input
              type="text"
              name="second-name"
              placeholder="Surname"
              className="form-input"
              required
            />
          </li>
          <li>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="form-input"
              required
            />
          </li>
          <li>
            <button type="submit" className="btn subscribe-btn">
              Subscribe
            </button>
          </li>
        </ul>
      </form>

      <ul className="nav-icons">
        <li>
          <a
            className="icon-link"
            href="https://www.facebook.com/EJANDTN"
            target="_blank"
            rel="noreferrer noopener"
          >
            <IonIcon className="icon sub-icon" icon={logoFacebook}></IonIcon>
          </a>
        </li>
        <li>
          <a
            className="icon-link"
            href="https://www.youtube.com/channel/UCL_coC_N5kLJ-AcbMh3I_fg"
            target="_blank"
            rel="noreferrer noopener"
          >
            <IonIcon className="icon sub-icon" icon={logoYoutube}></IonIcon>
          </a>
        </li>
        <li>
          <a
            className="icon-link"
            href="https://www.instagram.com/ejandtn/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <IonIcon className="icon sub-icon" icon={logoInstagram}></IonIcon>
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
              className="icon sub-icon"
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
            <IonIcon className="icon sub-icon" icon={logoApple}></IonIcon>
          </a>
        </li>
        <li>
          <a
            className="icon-link"
            href="https://twitter.com/EJANDTN"
            target="_blank"
            rel="noreferrer noopener"
          >
            <IonIcon className="icon sub-icon" icon={logoTwitter}></IonIcon>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Subscribe;
