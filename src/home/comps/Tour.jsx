import { useState, useEffect } from 'react';

import LoadGigsBtn from './utils/LoadGigsBtn';
import loadGigs from './utils/loadGigs';

const Tour = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    loadGigs(() => {
      setLoaded(true);
    });
  });

  return (
    <section className="tour-section section-seperator" id="tour">
      <h1 className="tour-header">Tour</h1>

      {loaded && <LoadGigsBtn />}
    </section>
  );
};

export default Tour;
