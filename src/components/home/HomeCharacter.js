import React from 'react';
import "../../asset/styles/home/homecharacter.css";
import character1 from "../../asset/images/character1.webp";
import character2 from "../../asset/images/character2.webp";
import character3 from "../../asset/images/character3.jpg";
import character4 from "../../asset/images/character4.png";
import character5 from "../../asset/images/character5.webp";
import character6 from "../../asset/images/character6.jpg";
import character7 from "../../asset/images/character7.jpeg";
import character8 from "../../asset/images/character8.webp";

const HomeCharacter = () => {
    const characters = [
        { img: character1, name: "Super Mario™" },
        { img: character2, name: "The Legend of Zelda™" },
        { img: character3, name: "Splatoon™" },
        { img: character4, name: "Kirby™" },
        { img: character5, name: "Pikmin™" },
        { img: character6, name: "Animal Crossing™" },
        { img: character7, name: "Metroid™" },
        { img: character8, name: "Pokémon™" },
      ];
  return (
    <div className="home-character">
      <h1>Characters</h1>
      <div className="character-grid">
        {characters.map((character, index) => (
          <div key={index} className="character-card">
            <img
              src={character.img}
              alt={character.name}
              className="character-image"
            />
            <h4>{character.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeCharacter;
