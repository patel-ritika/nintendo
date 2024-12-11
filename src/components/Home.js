import React from 'react';
import HomeTop from './home/HomeTop';
import HomeFeature from './home/HomeFeature';
import HomeSecond from './home/HomeSecond';
import HomeNews from './home/HomeNews';
import HomeCharacter from './home/HomeCharacter';
import HomeBest from './home/HomeBest';

const Home = () => {
  return (
    <div>
      <HomeTop/>
      <HomeFeature/>
      <HomeSecond/>
      <HomeNews/>
      <HomeCharacter/>
      <HomeBest/>
    </div>
  );
}

export default Home;
