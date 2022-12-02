import { IonIcon } from '@ionic/react';
import { close } from 'ionicons/icons';

const BIAG = props => {
  return (
    <div className="modal-body">
      <div className="modal-header">
        <div className="album-modal-btns">
          <a
            href="https://open.spotify.com/album/0gOW60VIibKDlsZPhSnqaa?si=cPFJEyqZR2KkkEoJjEH-eA"
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
            src="imgs/Because-im-a-giant-1-Web-reduce.jpg"
            alt="Elijah James And The Nightares Album Art of Because I'm A Giant LP"
          />
          <div className="title-date">
            <span className="album-title">Because I'm A Giant LP</span>
            <span className="album-date">September 6, 2019</span>
          </div>
        </div>
        <div className="tracklist">
          <h2>Tracklist:</h2>
          <ol>
            <span>Side A</span>
            <li>I Hate It Here, But You Are Here, And I Love You</li>
            <li>Spirits & Ghosts</li>
            <li>Cut Me Down</li>
            <li>To Sue, Too Soon</li>
            <span>Side B</span>
            <li>Movie In Your Eyes</li>
            <li>Talisman</li>
            <li>There's Everything Else, And Then There's You</li>
            <li>Patricia's March</li>
            <li>Mayfly (One Last Perfect Day)</li>
            <span>Side C</span>
            <li>On A Stage</li>
            <li>Beyond The Horizon</li>
            <li>Theme Music For A Princess</li>
            <li>Scared Of Everything</li>
            <li>A Most Unwelcome Encounter</li>
            <span>Side D</span>
            <li>My Misery and Me</li>
            <li>Daydreaming</li>
            <li>Andy's Song</li>
            <li>Man-Made Masquerade</li>
          </ol>
        </div>
        <div className="credits">
          <h2>Credits</h2>
          <ul>
            <li>
              All song written, arranged, and produced by E. J. Mainwaring
            </li>
            <li>
              Recorded by Tom Roach and E. J. Mainwaring at Elevator Studios and
              Nightmare Studios
            </li>
            <li>
              Drums recorded at Canvas Sound with thanks to Connor Dickson
            </li>
            <li>Mixed by Tom Roach</li>
            <li>Mastered by Tom Woodhead</li>
            <li>
              James Cudworth - Electric Guitar on track 1, 2, 4, 5, 9, Saxophone
              on track 1, 18, Clarinet on track 1, 10, Flute on track 1, 10,
              Banjo on track 7, Mandolin on track 1, Synth on track 18, Bass on
              track 15, Drums on track 4, 14, Percussion on tracks 1, 2, 3, 4,
              5, 6, 10, 13, 14, Djembe on track 2
            </li>
            <li>
              Simon Bill Gelling - Electric Guitar on track 1, 2, 4, 5, 6, 10,
              18, Backing Vocals on track 1, 4, 5, 13, 18
            </li>
            <li>Matt Kearon - Bass on track 18</li>
            <li>
              Emily Vanlint - Violin on track 1, 2, 4, 5, 6, 10, 13, 14, 18,
              Viola on tracks 1, 2, 4, 5, 10, 13, 14
            </li>
            <li>
              Rachel Wharton - Tenor Horn on tracks 1, 2, 5, 6, 10, 14, 18
            </li>
            <li>
              Nathanial Gamsu - Piano on tracks 1, 2, 4, 5, 6, 10, 14, 18, Organ
              on tracks 3, 13
            </li>
            <li>Luke Moore - Cello on tracks 1, 2, 4, 7</li>
            <li>Matthew Jones - Cornet on tracks 1, 5</li>
            <li>
              Josh Betley - Trumpet on tracks - 6, 14, Cornet on track 14,
              Flugelhorn on track 14
            </li>
            <li>Gareth Dawson - Drums on tracks 1, 2, 3, 5, 6, 10, 18</li>
            <li>John Mac - Bass on track 4</li>
            <li>Jenny Coyle - Backing Vocals on tracks 3, 5, 13, 14, 15</li>
            <li>art direction and design by Elijah James</li>
            <li>illustration and graphic design by Jonathon Tottey</li>
          </ul>
        </div>
        <div className="desc-modal">
          <h2>About</h2>
          <p>
            Because I'm A Giant is an album that from its original conception
            was ambitious in scope. It features 18 songs, was recorded over a
            period of three and a half years between 2015-2018, and is the
            product of E. J. Mainwaring travelling around the UK (mostly
            Liverpool) with a backpack full of borrowed microphones to various
            musicians/friends houses to track the parts he’d written. Although
            there's no overriding concept to the album, Elijah was focussing on
            writing songs with narratives and creating characters with rich
            personalities and backgrounds. Its intent is an atmospheric and
            poignant journey through the magnificent highs and the necessary
            lows of growing up. E. J. Mainwaring weaves a plethora of musical
            styles from indie, rock, folk, pop and incorporates over 25
            different acoustic/electric instruments with themes and emotions
            everybody’s experienced at one point or another in their life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BIAG;
