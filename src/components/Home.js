import React from 'react';
import HomeTop from './home/HomeTop';
import HomeFeature from './home/HomeFeature';
import HomeSecond from './home/HomeSecond';
import HomeNews from './home/HomeNews';
import HomeCharacter from './home/HomeCharacter';

const Home = () => {
  return (
    <div>
      <HomeTop/>
      <HomeFeature/>
      <HomeSecond/>
      <HomeNews/>
      <HomeCharacter/>
    </div>
  );
}

export default Home;
