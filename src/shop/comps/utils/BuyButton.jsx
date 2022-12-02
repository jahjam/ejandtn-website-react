import { useEffect } from 'react';
import ShopifyBuy from '@shopify/buy-button-js';

const shopifyClient = ShopifyBuy.buildClient({
  domain: 'ejandtn.myshopify.com',
  storefrontAccessToken: '325a35eaf57d6c34c9db2732826c59cd',
});

const ui = ShopifyBuy.UI.init(shopifyClient);

const BuyButton = props => {
  const id = props.id;
  useEffect(() => {
    ui.createComponent('product', {
      id,
      node: document.getElementById(`buy-now-${id}`),
      moneyFormat: '%C2%A3%7B%7Bamount%7D%7D',
      options: props.options.options,
    });
  });

  return <div id={`buy-now-${id}`} />;
};

export default BuyButton;
