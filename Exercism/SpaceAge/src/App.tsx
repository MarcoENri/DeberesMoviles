import React, { useState } from 'react';

interface Planets {
  [key: string]: number;
}

const RATIOS: Planets = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132
};

function calculateAge(planet: string, seconds: number): number {
  const earthYears = seconds / 31557600;
  const planetYears = earthYears / RATIOS[planet]; 
  return parseFloat(planetYears.toFixed(2)); 
}

const AgeCalculator: React.FC = () => {
  const [planet, setPlanet] = useState<string>('earth');
  const [seconds, setSeconds] = useState<number>(0);
  const [ageResult, setAgeResult] = useState<number | null>(null);

  const handlePlanetChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPlanet(event.target.value);
  };

  const handleSecondsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSeconds(Number(event.target.value));
  };

  const handleCalculateAge = () => {
    if (!isNaN(seconds)) {
      const calculatedAge = calculateAge(planet, seconds);
      setAgeResult(calculatedAge);
    }
  };

  return (
    <div>
      <h1>Planet Age Calculator</h1>
      <div>
        <label>
          Select a planet:
          <select value={planet} onChange={handlePlanetChange}>
            {Object.keys(RATIOS).map((planetName) => (
              <option key={planetName} value={planetName}>
                {planetName}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label>
          Enter seconds lived:
          <input
            type="number"
            value={seconds}
            onChange={handleSecondsChange}
          />
        </label>
      </div>
      <div>
        <button onClick={handleCalculateAge}>Calculate Age</button>
      </div>
      {ageResult !== null && (
        <div>
          <p>
            Your age on {planet} is approximately {ageResult} years.
          </p>
        </div>
      )}
    </div>
  );
};

export default AgeCalculator;
