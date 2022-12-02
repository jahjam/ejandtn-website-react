import { IonIcon } from '@ionic/react';
import { playCircleOutline, close } from 'ionicons/icons';

import { useState } from 'react';

import BIAGAlbumStream from './youtubeModals/BIAGAlbumStream';
import TwoSongsEp from './youtubeModals/TwoSongsEp';
import HateItHere from './youtubeModals/HateItHere';
import OnAStage from './youtubeModals/OnAStage';

const Videos = () => {
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
      <section className="video-section section-seperator" id="videos">
        <h1 className="video-header">Videos</h1>
        <div className="video-gallery grid--2-cols">
          <div className="video-box">
            <img
              data-title="BIAGAlbumStream"
              onClick={openModalHandler}
              className="video-thumb"
              src="imgs/BIAG-thumb-reduce.jpg"
              alt="Thumbnail for Because I'm A Giant Video"
            />
            <IonIcon className="video-icon" icon={playCircleOutline}></IonIcon>
          </div>
          <div className="video-box">
            <img
              data-title="TwoSongsEp"
              onClick={openModalHandler}
              className="video-thumb"
              src="imgs/EP-thumb-reduce.jpg"
              alt="Thumbnail for It's Too Late Now To Say: Two Songs EP Video"
            />
            <IonIcon className="video-icon" icon={playCircleOutline}></IonIcon>
          </div>
          <div className="video-box">
            <img
              data-title="HateItHere"
              onClick={openModalHandler}
              className="video-thumb"
              src="imgs/hate-it-here-thumb-reduce.jpg"
              alt="Thumbnail for I Hate It Here But You Are Here And I Love You Single Video"
            />
            <IonIcon className="video-icon" icon={playCircleOutline}></IonIcon>
          </div>
          <div className="video-box">
            <img
              data-title="OnAStage"
              onClick={openModalHandler}
              className="video-thumb"
              src="imgs/on-a-stage-thumb-reduce.jpg"
              alt="Thumbnail for On A Stage Single Video"
            />
            <IonIcon className="video-icon" icon={playCircleOutline}></IonIcon>
          </div>
        </div>
      </section>

      <aside
        onClick={closeModalHandler}
        className="video-modal"
        style={{
          display: noDisplay ? 'none' : 'flex',
        }}
      >
        <div className="video-body">
          <div className="close-modal close-video-modal">
            <IonIcon
              onClick={closeModalHandler}
              className="icon-mobile-nav close-video-icon"
              icon={close}
            ></IonIcon>
          </div>

          {modalSelect === 'BIAGAlbumStream' && <BIAGAlbumStream />}
          {modalSelect === 'HateItHere' && <HateItHere />}
          {modalSelect === 'OnAStage' && <OnAStage />}
          {modalSelect === 'TwoSongsEp' && <TwoSongsEp />}
        </div>
      </aside>
    </>
  );
};

export default Videos;
