import BuyButton from '../utils/BuyButton';
import css from './btnCss';

const BIAGVinyl = () => {
  return (
    <>
      <div className="product">
        <img
          src="imgs/vinyl-2-discs-for-shop-low-res.jpg"
          alt="Elijah James And The Nightmares, Because I'm A Giant photograph of vinyl"
          className="product-img"
        />

        <h3 className="product-title">Because I'm A Giant Double Vinyl LP</h3>

        <p className="product-description">
          Because I'm A Giant features eighteen songs and was recorded over a
          period of three and a half years between 2015-2018. It is the product
          of E. J. Mainwaring travelling round the UK (mostly Liverpool) with a
          backpack full of borrowed microphones and recording equipment to
          various musicians/friends houses to record all the different
          instruments that feature on the record. Although there's no overriding
          concept, E. J. Mainwaring was focused on writing songs with deep
          narratives and creating characters with rich personalities that could
          embody the everyday struggles he aimed to express. Its intent is an
          atmospheric and poignant journey through the magnificent highs and the
          necessary lows of growing up.
        </p>

        <h3 className="product-price">£20</h3>

        <h4 className="product-shipping">
          Shipping is calculated at checkout*
        </h4>

        <div className="add-to-cart-btn">
          <div id="product-component-1653648797989"></div>
          <BuyButton key="1" id="7707725168893" options={css} />
        </div>
      </div>
    </>
  );
};

export default BIAGVinyl;
