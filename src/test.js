(function () {
  const init = () => {
    const offerUrlContents = [
      '29736',
      '29738',
      '29738',
      '29734',
      '29735',
      '29733',
      '29740',
      '29741',
      '29742',
      '29743',
      '29744',
      '29745',
      '29752',
      '29751',
      '29748',
      '29753',
      '29750',
      '29749',
      '29756',
      '29762',
      '29761',
      '29759',
      '29758',
      '29757',
      '29755',
      '29763',
      '29760',
    ];

    const isValidOfferProduct = () =>
      offerUrlContents.some(
        (urlContent) => window.location.pathname.includes(urlContent) || window.location.pathname.includes('/cart')
      );

    if (isValidOfferProduct()) {
      const cartBtnContainer = document.querySelector('.add-to-cart-container');
      cartBtnContainer && cartBtnContainer.classList.add('giftbuilder-hide');
    }

    const isCartPage = () => window.location.pathname.includes('/cart');

    if (isCartPage()) {
      //check if user has offer items in Cart
      const cartPromo = document.querySelector('.Cart_Promotion');
      const allCartProducts = document.querySelectorAll('.Cart-Product');
      cartPromo.classList.add('giftbuilder-hide');

      //   const offerProdCount = [...allCartProducts].map((cartProduct) => {
      //     //check if this is a offer product

      //     const prodyctUrl = cartProduct.querySelector('.Cart-ProductName > a').getAttribute('href');

      //     return offerUrlContents.some((item) => prodyctUrl.includes(item));
      //   }).length;

      //   let unEvenCount;

      //   if (offerProdCount % 3 !== 0 && offerProdCount < 3) {
      //     return;
      //   } else if (offerProdCount % 3 !== 0 && offerProdCount > 3) {
      //     unEvenCount = offerProdCount - (offerProdCount % 3);
      //   }

      //   console.log(unEvenCount);
      allCartProducts.length > 0 &&
        allCartProducts.forEach((cartProduct, index) => {
          //check if this is a offer product

          const prodyctUrl = cartProduct.querySelector('.Cart-ProductName > a').getAttribute('href');

          const isOfferUrl = offerUrlContents.some((item) => prodyctUrl.includes(item));
          if (isOfferUrl) {
            cartProduct.classList.add('giftbuider-disabled');
          }
        });
    }
  };

  init();
  // Select the node that will be observed for mutations
  const targetNode = document.querySelector('body');

  // Options for the observer (which mutations to observe)
  const config = { attributes: true, childList: true, subtree: true };

  // Callback function to execute when mutations are observed
  const callback = (mutationList) => {
    for (const mutation of mutationList) {
      if (mutation.type === 'childList') {
        console.log('A child node has been added or removed.');
        init();
      }
    }
  };

  // Create an observer instance linked to the callback function
  const observer = new MutationObserver(callback);

  // Start observing the target node for configured mutations
  observer.observe(targetNode, config);
})();
