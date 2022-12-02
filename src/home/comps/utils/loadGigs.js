const loadGigs = callback => {
  const existingScript = document.getElementById('bandsInTownWidget');
  if (!existingScript) {
    const script = document.createElement('script');
    script.src = 'https://widget.bandsintown.com/main.min.js';
    script.id = 'bandsInTownWidget';
    script.alt = 'Bands In Town widget';
    document.body.appendChild(script);
    script.onload = () => {
      if (callback) callback();
    };
  }
  if (existingScript && callback) callback();
};

export default loadGigs;
