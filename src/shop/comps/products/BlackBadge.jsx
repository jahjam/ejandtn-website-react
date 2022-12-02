import BuyButton from '../utils/BuyButton';
import css from './btnCss';

const BlackBadge = () => {
  return (
    <div className="product">
      <img
        src="imgs/badge-black-low-res.jpg"
        alt="Elijah James And The Nightmares, Because I'm A Giant photograph of vinyl"
        className="product-img"
      />

      <h3 className="product-title">Black Square EJANDTN Badge</h3>

      <p className="product-description">
        These badges were made to sell at the first ever Elijah James And The
        Nightmares gig. We sold a bunch, but still have a few left, so pick one
        up to wear, or just to collect! They'll never be made again.
      </p>

      <h3 className="product-price">£1</h3>

      <h4 className="product-shipping">Shipping is calculated at checkout*</h4>

      <div className="add-to-cart-btn">
        <div id="product-component-1653655007471"></div>
        <BuyButton key="3" id="7707950940413" options={css} />
      </div>
    </div>
  );
};

export default BlackBadge;
