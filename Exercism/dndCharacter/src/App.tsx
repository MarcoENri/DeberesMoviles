import React, { useState, useEffect } from 'react';

interface Character {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  hitpoints: number;
}

const DnDCharacter = () => {
  const [character, setCharacter] = useState<Character>({
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0,
    hitpoints: 0
  });

  useEffect(() => {
    const newCharacter: Character = {
      strength: generateAbilityScore(),
      dexterity: generateAbilityScore(),
      constitution: generateAbilityScore(),
      intelligence: generateAbilityScore(),
      wisdom: generateAbilityScore(),
      charisma: generateAbilityScore(),
      hitpoints: 10 + getModifierFor(character.constitution)
    };
    setCharacter(newCharacter);
  }, []); 

  function generateAbilityScore(): number {
    const dice: number[] = [];
    let minDice = 6;
    for (let i = 0; i < 4; i++) {
      dice.push(Math.floor(Math.random() * 6) + 1);
      if (minDice > dice[i]) {
        minDice = dice[i];
      }
    }
    return dice.reduce((sum, a) => sum + a, 0) - minDice;
  }

  function getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2);
  }

  useEffect(() => {
    if (character.constitution !== 0) {
      const newHitpoints = 10 + getModifierFor(character.constitution);
      setCharacter(prevCharacter => ({ ...prevCharacter, hitpoints: newHitpoints }));
    }
  }, [character.constitution]);

  return (
    <div>
      <h2>Dungeons & Dragons Character</h2>
      <ul>
        <li>Strength: {character.strength}</li>
        <li>Dexterity: {character.dexterity}</li>
        <li>Constitution: {character.constitution}</li>
        <li>Intelligence: {character.intelligence}</li>
        <li>Wisdom: {character.wisdom}</li>
        <li>Charisma: {character.charisma}</li>
        <li>Hitpoints: {character.hitpoints}</li>
      </ul>
    </div>
  );
};

export default DnDCharacter;
