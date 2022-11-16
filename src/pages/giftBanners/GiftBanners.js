import React, { useEffect } from 'react';
import gaTracking from '../../helpers/gaTracking';
//import { selectedGiftOptionContext } from '../../contexts/SelectedGiftOptionContext';
import scrollToTop from '../../helpers/scrollTop';
import GiftBanner from './GiftBanner';

import './Giftbanners.css';

const GiftBanners = ({ bannersData, bannerClickHandler }) => {
  //const { setSelectedGiftOption } = useContext(selectedGiftOptionContext);

  useEffect(() => {
    scrollToTop();
  });
  //console.log(bannersData);
  const clickedTargetData = (data) => {
    bannerClickHandler(data);
    gaTracking(`user selected ${data.name}`);
    //setSelectedGiftOption(data);
  };
  const giftBanners = bannersData.map((data, index) => (
    <GiftBanner data={data} key={index} clickedTargetData={clickedTargetData} />
  ));

  return (
    <div className='giftbanners-wrapper'>
      <h1 className='giftbanners-headline'>Crea il tuo regalo</h1>
      <h4 className='giftbanners-subheadline'>
        Crea il regalo di Natale perfetto seguendo il nostro percorso guidato: che siano guru del make-up, amanti delle coccole o
        esperti di skincare, ti basterà selezionare i prodotti che amano di più per creare un fantastico regalo personalizzato
        apposta per loro. Il tuo regalo includerà anche un elegante sacchetto regalo, così non dovrai nemmeno preoccuparti di
        incartarlo!
      </h4>
      <div className='giftbanners'>{giftBanners}</div>
    </div>
  );
};

export default GiftBanners;
