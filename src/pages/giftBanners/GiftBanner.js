import React from 'react';
import ProductPrice from '../../components/productPriceBlock/ProductPrice';

const GiftBanner = ({ data, clickedTargetData }) => {
  const IMG_SRC_BASE = 'https://ucds.ams3.digitaloceanspaces.com/AvonGifting/';

  //const { data } = props;
  const { name, image, currentPrice, prevPrice, priceMessage, description, btnText } = data;

  return (
    <div className='giftbanner'>
      <img className='giftbanner__image' src={IMG_SRC_BASE + image} alt={name} />
      <div className='giftbanner-bottom'>
        <h4>Componi & Crea il tuo regalo</h4>
        <div className='giftbanner__name'>{name}</div>
        <div className='giftbanner__priceblock'>
          <ProductPrice listPrice={prevPrice} salePrice={currentPrice} />
          <p className='price-message'>{priceMessage}</p>
        </div>

        <p className='giftBanner__description'> {description}</p>
        <button className='giftbanner__button' onClick={() => clickedTargetData(data)}>
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default GiftBanner;
