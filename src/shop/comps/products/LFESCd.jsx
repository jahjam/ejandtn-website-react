import BuyButton from '../utils/BuyButton';
import css from './btnCss';

const LFESCd = () => {
  return (
    <>
      <div className="product">
        <img
          src="imgs/live-ep-cd-for-shop-low-res.jpg"
          alt="Elijah James And The Nightmares, Because I'm A Giant photograph of vinyl"
          className="product-img"
        />

        <h3 className="product-title">Live At Elevator Studios EP CD</h3>

        <p className="product-description">
          On June 10th 2017, Elijah James And The Nightmares stepped into
          Elevator Studios with Tom Roach at the mixing desk to track their
          first set of recordings as a band. Performing totally live, the EP
          captures the energy, intensity and excitement created by the eight
          piece, encapsulating their live sound.
        </p>

        <h3 className="product-price">£5</h3>

        <h4 className="product-shipping">
          Shipping is calculated at checkout*
        </h4>

        <div className="add-to-cart-btn">
          <div id="product-component-1653653618647"></div>
          <BuyButton key="2" id="7707820097789" options={css} />
        </div>
      </div>
    </>
  );
};

export default LFESCd;
