import { useEffect, useRef } from 'react';

const Shipping = props => {
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
    <div ref={el} className="footer-drop shipping-info" id="shipping">
      <div className="footer-content">
        <button
          onClick={props.closeModalHandler}
          className="shop-button close-foooter"
        >
          Close
        </button>
        <p className="shop-p">
          Elijah James And The Nightmares is not responsible for lost or stolen
          packages.
        </p>
        <br />
        <p className="shop-p">
          We reserve the right to cancel orders of excessive quantities.
        </p>
        <br />
        <p className="shop-p">
          If you wish to return an item for any reason, please contact me first
          regarding this using the contact page. I will do everything I can to
          help.
        </p>
        <button
          onClick={props.closeModalHandler}
          className="shop-button close-foooter"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Shipping;
