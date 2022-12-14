import React, { useState, useEffect, useContext } from 'react';
import { selectedGiftOptionContext } from '../../contexts/SelectedGiftOptionContext';
import { selectedProductContext } from '../../contexts/SelectedProductContext';
import gaTracking from '../../helpers/gaTracking';
import ProductPrice from '../productPriceBlock/ProductPrice';

import './Offerbar.css';

const OfferBar = ({ bundledPrice }) => {
  const { selectedProducts, setSelectedProducts } = useContext(selectedProductContext);
  const { selectedGiftOption } = useContext(selectedGiftOptionContext);

  const [addtoCart, setAddtoCart] = useState('Aggiungi-al-carrello');

  //console.log(selectedProducts);

  //console.log(selectedProducts);
  const cdnDomain = 'https://ucds.ams3.digitaloceanspaces.com/AvonGifting';
  const selectedCount = selectedProducts.length;

  const imagesData = selectedProducts.map(({ cardImages, Name, variantSelected }) => {
    return {
      image: cardImages[0],
      title: Name,
      variantSelected,
    };
  });

  const total =
    selectedProducts.length > 2 &&
    selectedProducts.reduce((prev, curr) => {
      return prev + curr.ListPrice;
    }, 0);

  useEffect(() => {
    const addAllToCart = async () => {
      const addToCartEndpoint = '/api/cartapi/add';
      const payloads = imagesData.map(({ variantSelected }) => {
        return {
          Campaign: window._ShopContext.CampaignNumber,
          Quantity: 1,
          Sku: variantSelected.Sku,
        };
      });
      const gift = {
        Campaign: window._ShopContext.CampaignNumber,
        Quantity: 1,
        Sku: '28792-18324365',
      };
      const plusGift = [...payloads, gift];
      console.log(plusGift);

      const options = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(plusGift),
      };

      const response = await fetch(addToCartEndpoint, options);
      const data = await response.json();
      console.log(data);
      setAddtoCart('Aggiunto-al-carrello');
      //setSelectedProducts([]);
      gaTracking(`user added ${selectedGiftOption.name} to cart`);
      localStorage.setItem('avon-mealdeal-preselected', JSON.stringify(selectedGiftOption));
      window.location.href = window.location.href.split('#')[0];
    };
    addtoCart === 'Aggiunta-al-carrello' && setTimeout(addAllToCart, 1000);
  }, [addtoCart, imagesData, selectedGiftOption, setSelectedProducts]);

  return (
    <div className={`${selectedProducts.length > 0 ? 'item-selected' : 'no-item-selected'} offerbar-container`}>
      <div className='offerbar-container-inner'>
        <div className='item-count'>
          {selectedCount} item{`${selectedCount > 1 ? 's' : ''}`} selected
        </div>
        <div className='selected-items'>
          <div className='selected-item'>
            <img src={imagesData[0]?.image} alt={imagesData[0]?.title} />
          </div>
          <img src={`${cdnDomain}/gift-plus-sign-white.png`} alt='plus sign' />
          <div className='selected-item'>
            <img src={imagesData[1]?.image} alt={imagesData[1]?.title} />
          </div>
          <img src={`${cdnDomain}/gift-plus-sign-white.png`} alt='plus sign' />
          <div className='selected-item'>
            <img src={imagesData[2]?.image} alt={imagesData[2]?.title} />
          </div>
        </div>
        {selectedCount > 2 ? (
          <>
            <div className='offer-details'>
              <ProductPrice listPrice={total} salePrice={bundledPrice} />
            </div>
            <div className={`addtocart-btn ${addtoCart || 'add-to-bag'}`} onClick={() => setAddtoCart('Aggiunta-al-carrello')}>
              {addtoCart.split('-').join(' ') || 'Aggiungi al carrello'}
            </div>
          </>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default OfferBar;
