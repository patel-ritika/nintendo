import React from 'react';
import ShopTop from './shop/ShopTop';
import ShopTrial from './shop/ShopTrial';
import HomeDigital from './home/HomeDigital';
import ShopHoliday from './shop/ShopHoliday';
import ShopMulti from './shop/ShopMulti';

const Shop = () => {
  return (
    <div>
      <ShopTop/>
      <ShopTrial/>
      <HomeDigital/>
      <ShopHoliday/>
      <ShopMulti/>
    </div>
  );
}

export default Shop;
