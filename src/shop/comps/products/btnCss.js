const css = {
  options: {
    product: {
      styles: {
        product: {
          '@media (min-width: 601px)': {
            'max-width': 'calc(25% - 20px)',
            'margin-left': '20px',
            'margin-bottom': '50px',
          },
        },
        button: {
          'font-family': 'Roboto, sans-serif',
          'text-transform': 'uppercase',
          'font-size': '12px',
          'font-weight': '700',
          'padding-top': '16.5px',
          'padding-bottom': '16.5px',
          color: '#f0f2e6',
          ':hover': {
            color: '#f0f2e6',
            'background-color': '#53899e',
          },
          'background-color': '#5c98b0',
          ':focus': {
            'background-color': '#53899e',
          },
          'border-radius': '10px',
          'padding-left': '46px',
          'padding-right': '46px',
        },
        quantityInput: {
          ':focus': {
            outline: 'none',
            background: '#D3D3D3 !important',
          },
          background: '#f0f2e6 !important',
          'font-size': '14px',
          'padding-top': '15px',
          'padding-bottom': '15px',
          'border-radius': '10px',
        },
      },
      contents: {
        img: false,
        button: false,
        buttonWithQuantity: true,
        title: false,
        price: false,
      },
      text: {
        button: 'Add to Cart',
      },
      googleFonts: ['Roboto'],
    },
    productSet: {
      styles: {
        products: {
          '@media (min-width: 601px)': {
            'margin-left': '-20px',
          },
        },
      },
    },
    modalProduct: {
      contents: {
        img: false,
        imgWithCarousel: true,
        button: false,
        buttonWithQuantity: true,
      },
      styles: {
        product: {
          '@media (min-width: 601px)': {
            'max-width': '100%',
            'margin-left': '0px',
            'margin-bottom': '0px',
          },
        },
        button: {
          'font-family': 'Roboto, sans-serif',
          'font-size': '14px',
          'padding-top': '15px',
          'padding-bottom': '15px',
          color: '#f0f2e6',
          ':hover': {
            color: '#f0f2e6',
            'background-color': '#53899e',
          },
          'background-color': '#5c98b0',
          ':focus': {
            'background-color': '#53899e',
          },
          'border-radius': '10px',
          'padding-left': '46px',
          'padding-right': '46px',
        },
        quantityInput: {
          ':focus': {
            outline: 'none',
            background: '#D3D3D3 !important',
          },
          background: '#f0f2e6 !important',
          'border-radius': '10px',
          'font-size': '14px',
          'padding-top': '15px',
          'padding-bottom': '15px',
        },
      },
      googleFonts: ['Roboto'],
      text: {
        button: 'Add to cart',
      },
    },
    option: {},
    cart: {
      styles: {
        button: {
          'font-family': 'Roboto, sans-serif',
          'font-size': '14px',
          'padding-top': '15px',
          'padding-bottom': '15px',
          color: '#f0f2e6',
          ':hover': {
            color: '#f0f2e6',
            'background-color': '#53899e',
          },
          'background-color': '#5c98b0',
          ':focus': {
            'background-color': '#53899e',
          },
          'border-radius': '10px',
        },
        title: {
          color: '#000000',
        },
        header: {
          color: '#000000',
        },
        lineItems: {
          color: '#000000',
        },
        subtotalText: {
          color: '#000000',
        },
        subtotal: {
          color: '#000000',
        },
        notice: {
          color: '#000000',
        },
        currency: {
          color: '#000000',
        },
        close: {
          color: '#000000',
          ':hover': {
            color: '#000000',
          },
        },
        empty: {
          color: '#000000',
        },
        noteDescription: {
          color: '#000000',
        },
        discountText: {
          color: '#000000',
        },
        discountIcon: {
          fill: '#000000',
        },
        discountAmount: {
          color: '#000000',
        },
        cart: {
          'background-color': '#f0f2e6',
        },
        footer: {
          'background-color': '#f0f2e6',
        },
      },
      text: {
        total: 'Subtotal',
        button: 'Checkout',
      },
      googleFonts: ['Roboto'],
    },
    toggle: {
      styles: {
        toggle: {
          'font-family': 'Roboto, sans-serif',
          'background-color': '#5c98b0',
          ':hover': {
            'background-color': '#53899e',
          },
          ':focus': {
            'background-color': '#53899e',
          },
        },
        count: {
          'font-size': '14px',
          color: '#f0f2e6',
          ':hover': {
            color: '#f0f2e6',
          },
        },
        iconPath: {
          fill: '#f0f2e6',
        },
      },
      googleFonts: ['Roboto'],
    },
    lineItem: {
      styles: {
        variantTitle: {
          color: '#000000',
        },
        title: {
          color: '#000000',
        },
        price: {
          color: '#000000',
        },
        fullPrice: {
          color: '#000000',
        },
        discount: {
          color: '#000000',
        },
        discountIcon: {
          fill: '#000000',
        },
        quantity: {
          color: '#000000',
        },
        quantityIncrement: {
          color: '#000000',
          'border-color': '#000000',
        },
        quantityDecrement: {
          color: '#000000',
          'border-color': '#000000',
        },
        quantityInput: {
          ':focus': {
            outline: 'none',
            background: '#D3D3D3 !important',
          },
          background: '#f0f2e6 !important',
          'border-radius': '0 !important',
          color: '#000000',
          'border-color': '#000000',
        },
      },
    },
  },
};

export default css;
