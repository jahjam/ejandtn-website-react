const Contact = () => {
  return (
    <section className="contact-section container section-seperator">
      <h1 className="contact-header">Contact</h1>
      <div className="contact-body grid--3-cols">
        <div className="contact-items">
          <h2>Bookings</h2>
          <h3>Email:</h3>
          <a className="link" href="mailto: ejandtn@gmail.com">
            <span className="contact-item">ejandtn@gmail.com</span>
          </a>
        </div>
        <div className="contact-items">
          <h2>Press Kit</h2>
          <a
            className="link"
            href="https://drive.google.com/file/d/16DW3MQBKSKfyEvJ2MDFgAWfpwH7Aity6/view?usp=sharing"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span className="contact-item">Artist Bio</span>
          </a>
          <a
            className="link"
            href="https://drive.google.com/file/d/1dITwndXfIlsleEdJsL-mjHdtDDLkHlfh/view?usp=sharing"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span className="contact-item">Press Photo</span>
          </a>
          <a
            className="link"
            href="https://drive.google.com/file/d/1TiC6ls9X0Sb_Ig09DWPp50JkZIX84azO/view?usp=sharing"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span className="contact-item">Album Mini</span>
          </a>
          <a
            className="link"
            href="https://drive.google.com/file/d/1ScRA2yURHtkHpltbXDIs2Xco7AXwTsV-/view?usp=sharing"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span className="contact-item">Band Logo</span>
          </a>
        </div>
        <div className="contact-items">
          <h2>Connect</h2>
          <a
            className="link"
            href="https://www.facebook.com/EJANDTN"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span className="contact-item">Facebook</span>
          </a>
          <a
            className="link"
            href="https://www.instagram.com/ejandtn/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span className="contact-item">Instagram</span>
          </a>
          <a
            className="link"
            href="https://twitter.com/EJANDTN"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span className="contact-item">Twitter</span>
          </a>
          <a
            className="link"
            href="https://www.youtube.com/channel/UCL_coC_N5kLJ-AcbMh3I_fg"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span className="contact-item">YouTube</span>
          </a>
          <a
            className="link"
            href="https://open.spotify.com/artist/7lw3bqd3rCmIYcpy6PnNor?si=LOx3w-k8QfG_Lh5FTb2_Jw"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span className="contact-item">Spotify</span>
          </a>
          <a
            className="link"
            href="https://music.apple.com/gb/artist/elijah-james-and-the-nightmares/1271334018"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span className="contact-item">Apple Music</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
