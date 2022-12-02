import { useState } from 'react';

import ElevatorLiveEp from './albumModals/ElevatorLiveEp';
import BIAG from './albumModals/BIAG';
import TwoSongEp from './albumModals/TwoSongEp';

const Music = () => {
  const [modalSelect, setModalSelect] = useState(null);
  const [noDisplay, setNoDisplay] = useState(true);

  const openModalHandler = e => {
    setModalSelect(e.target.dataset.title);
    setNoDisplay(!noDisplay);
    document.body.classList.add('nooverflow');
  };

  const closeModalHandler = e => {
    setModalSelect(null);
    setNoDisplay(!noDisplay);
    document.body.classList.remove('nooverflow');
  };

  return (
    <>
      <section className="music-section section-seperator" id="music">
        <h1 className="music-header">Music</h1>
        <p className="music-section-desc">
          Click the artwork to find out more!
        </p>

        <div className="album-gallery grid--3-cols">
          <div className="art-box">
            <img
              onClick={openModalHandler}
              data-title="twoSongEp"
              className="album-artwork"
              src="imgs/Ep-cover-1-reduce.jpg"
              alt="Elijah James And The Nightares Album Art of It's Too Late Now To Say: Two Songs EP"
            />
            <span className="album-title">
              It's Too Late Now To Say: Two Songs
            </span>
            <span className="album-date">June 26, 2020</span>
          </div>
          <div className="art-box">
            <img
              onClick={openModalHandler}
              data-title="BIAG"
              className="album-artwork"
              src="imgs/Because-im-a-giant-1-Web-reduce.jpg"
              alt="Elijah James And The Nightares Album Art of Because I'm A Giant LP"
            />
            <span className="album-title">Because I'm A Giant LP</span>
            <span className="album-date">September 6, 2019</span>
          </div>
          <div className="art-box">
            <img
              onClick={openModalHandler}
              data-title="elevatorLiveEp"
              className="album-artwork"
              src="imgs/EJANDTN-EP-COVER-1-reduce.jpg"
              alt="Elijah James And The Nightares Album Art of Live From Elevator Studios EP"
            />
            <span className="album-title">Live From Elevator Studios</span>
            <span className="album-date">September 9, 2017</span>
          </div>
        </div>
      </section>

      <aside
        onClick={closeModalHandler}
        className="album-modal"
        style={{
          display: noDisplay ? 'none' : 'flex',
        }}
      >
        {modalSelect === 'elevatorLiveEp' && (
          <ElevatorLiveEp closeModalHandler={closeModalHandler} />
        )}
        {modalSelect === 'BIAG' && (
          <BIAG closeModalHandler={closeModalHandler} />
        )}
        {modalSelect === 'twoSongEp' && (
          <TwoSongEp closeModalHandler={closeModalHandler} />
        )}
      </aside>
    </>
  );
};

export default Music;
