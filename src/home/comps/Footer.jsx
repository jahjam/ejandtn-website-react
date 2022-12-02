const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer">
      <img
        src="imgs/ejandtn-logo.png"
        alt="Elijah James And The Nightmares logo"
        className="header-logo logo-footer"
      />
      <span>
        <a
          className="link"
          href="https://github.com/dreamingOfSoy/ejandtn-website"
          target="_blank"
          rel="noreferrer noopener"
        >
          Built using HTML, CSS, & vanilla JavaScript by E. J. Mainwaring
        </a>
        <br />
        <br />
        All Rights Reserved Elijah James And The Nightmares &copy;
        <span className="copy-date">{year}</span>
      </span>
    </footer>
  );
};

export default Footer;
