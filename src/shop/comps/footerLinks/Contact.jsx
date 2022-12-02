import { useEffect, useRef } from 'react';

const Contact = props => {
  const el = useRef();

  useEffect(() => {
    const elementPosition = el.current.getBoundingClientRect().top;
    const scrollTo = elementPosition + window.pageYOffset;

    window.scrollTo({
      top: scrollTo,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div ref={el} className="footer-drop contact-info" id="contact">
      <div className="footer-content">
        <button onClick={props.closeModalHandler} className="close-foooter">
          Close
        </button>
        <p>
          Contact form coming soon! For now, please email,
          <a className="link" href="mailto:ejandtn@gmail.com">
            ejandtn@gmail.com
          </a>
          .
        </p>
        <button onClick={props.closeModalHandler} className="close-foooter">
          Close
        </button>
      </div>
    </div>
  );
};

export default Contact;
