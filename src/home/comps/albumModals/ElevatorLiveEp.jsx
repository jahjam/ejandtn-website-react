import { IonIcon } from '@ionic/react';
import { close } from 'ionicons/icons';

const ElevatorLiveEp = props => {
  return (
    <div className="modal-body">
      <div className="modal-header">
        <div className="album-modal-btns">
          <a
            href="https://open.spotify.com/album/3tYznPxjejZKTrqkzk6Jrd?si=iB2fQf-9THS06evI6Q7BDA"
            target="_blank"
            rel="noreferrer noopener"
          >
            <button className="btn album-modal-btn">Stream</button>
          </a>
          <a
            href="https://www.elijahjamesandthenightmares.com/shop"
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
            src="imgs/EJANDTN-EP-COVER-1-reduce.jpg"
            alt="Elijah James And The Nightares Album Art of Live From Elevator Studios EP"
          />
          <div className="title-date">
            <span className="album-title">Live From Elevator Studios</span>
            <span className="album-date">September 9, 2017</span>
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
            <li>All songs written by E. J. Mainwaring</li>
            <li>Vox/Acoustic Guitar - E. J. Mainwaring</li>
            <li>Backing Vox/Electric Guitar - Simon Bill Gelling</li>
            <li>
              Electric Guitar/Saxophone/Clarinet/
              <br />
              Percussion/Keys - James Cudworth
            </li>
            <li>Bass - Matthew Kearon</li>
            <li>Drums - Gareth Dawson</li>
            <li>Piano/Keys - Nathaniel Gamsu</li>
            <li>Violin - Emily Claire</li>
            <li>Tenor Horn - Rachel Warton</li>
            <li>Mixed by Tom Roach</li>
            <li>Mastered by Tom Woodhead</li>
          </ul>
        </div>
        <div className="desc-modal">
          <h2>About</h2>
          <p>
            On June 10th 2017, Elijah James And The Nightmares stepped into
            Elevator Studios with Tom Roach at the mixing desk to track their
            first set of recordings as a band. Performing totally live, the EP
            captures the energy, intensity and excitement created by the eight
            piece, encapsulating their live sound.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ElevatorLiveEp;
