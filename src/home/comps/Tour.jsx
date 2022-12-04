import { useState, useEffect } from 'react';
import Script from 'react-load-script';
import loadGigs from './utils/loadGigs';

import LoadGigsBtn from './utils/LoadGigsBtn';

const Tour = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    loadGigs(() => {
      setLoaded(true);
    });
  }, []);

  return (
    <section className="tour-section section-seperator" id="tour">
      <h1 className="tour-header">Tour</h1>

      {loaded && (
        <Script
          url="https://widget.bandsintown.com/main.min.js"
          attributes={{ id: 'bandsInTownWidget', alt: 'Bands In Town widget' }}
        />
      )}

      {loaded && <LoadGigsBtn />}
    </section>
  );
};

export default Tour;
