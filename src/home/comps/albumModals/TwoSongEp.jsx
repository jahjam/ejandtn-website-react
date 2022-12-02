import { IonIcon } from '@ionic/react';
import { close } from 'ionicons/icons';

const TwoSongEp = props => {
  return (
    <div className="modal-body">
      <div className="modal-header">
        <div className="album-modal-btns">
          <a
            href="https://open.spotify.com/album/6jgcFTST9whuJQIryyfe18?si=kfwrQinzSe2VRxYf2M1yDw"
            target="_blank"
            rel="noreferrer noopener"
          >
            <button className="btn album-modal-btn">Stream</button>
          </a>
          <a
            href="https://ejandtn.bandcamp.com/album/its-too-late-now-to-say-two-songs"
            target="_blank"
            rel="noreferrer noopener"
          >
            <button className="btn album-modal-btn">Buy</button>
          </a>
        </div>
        <div className="close-modal">
          <IonIcon
            onClick={props.closeModalHandler}
            className="icon-mobile-nav close-modal-icon"
            icon={close}
          ></IonIcon>
        </div>
      </div>

      <div className="album grid--2-cols">
        <div className="img-title-date">
          <img
            className="album-artwork-modal"
            src="imgs/Ep-cover-1-reduce.jpg"
            alt="Elijah James And The Nightares Album Art of It's Too Late Now To Say: Two Songs EP"
          />
          <div className="title-date">
            <span className="album-title">
              It's Too Late Now To Say: Two Songs
            </span>
            <span className="album-date">June 26, 2020</span>
          </div>
        </div>
        <div className="tracklist">
          <h2>Tracklist:</h2>
          <ol>
            <li>Who'll Be Here Tomorrow?</li>
            <li>Enough Rope</li>
          </ol>
        </div>

        <div className="credits">
          <h2>Credits</h2>
          <ul>
            <li>All song written arranged and recorded by E. J. Mainwaring</li>
            <li>Mixed & Mastered by Tom Roach</li>
          </ul>
        </div>
        <div className="desc-modal">
          <h2>About</h2>
          <p>
            In May 2020, Elijah James And The Nightmares were set to record
            their sophomore LP. Alas, due to the Covid-19 pandemic, their plans
            - like everybody else's - were put on hold. Instead, Elijah James
            Mainwaring took to creating this short film, featuring two acoustic
            versions of songs from said upcoming LP: 1. Who'll Be Here Tomorrow?
            2. Enough Rope The two songs were recorded in his flat in Liverpool,
            UK, with the virtual help of
            <a href="https://www.tomroach.co.uk"> Tom Roach</a>, whom
            engineered, mixed and mastered the two song EP.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TwoSongEp;
