import React from 'react';
import "../../asset/styles/shop/shopcharacter.css";
import marioImage from "../../asset/images/char1.jpg"; // Images ko import karein
import zeldaImage from "../../asset/images/char2.jpg";
import splatoonImage from "../../asset/images/char3.webp";
import pokemonImage from "../../asset/images/char4.jpg";


const ShopCharacter = () => {
  return (
    <div className="shop-character-container">
    <h1 className="shop-character-title">Shop by Character</h1>
    <div className="shop-character-row">
      <div className="shop-character-item">
        <img src={marioImage} alt="Super Mario" className="shop-character-image" />
        <div className="shop-character-label">Super Mario</div>
      </div>
      <div className="shop-character-item">
        <img src={zeldaImage} alt="The Legend of Zelda" className="shop-character-image" />
        <div className="shop-character-label">The Legend of Zelda</div>
      </div>
      <div className="shop-character-item">
        <img src={splatoonImage} alt="Splatoon" className="shop-character-image" />
        <div className="shop-character-label">Splatoon</div>
      </div>
      <div className="shop-character-item">
        <img src={pokemonImage} alt="Pokemon" className="shop-character-image" />
        <div className="shop-character-label">Pokemon</div>
      </div>
    </div>
  </div>
  );
}

export default ShopCharacter;
