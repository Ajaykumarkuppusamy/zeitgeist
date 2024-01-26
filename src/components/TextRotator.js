import React, { useState, useEffect } from 'react';

const TextRotator = () => {
  const phrases = ['GTM Strategy', 'Experiential & Events', 'Media Relations & PR', 'Fractional CMO Support'];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [currentPhraseIndex, phrases.length]);

  return (
    <p className="w-1/3 h-10 text-white m-2 ml-24 font-semibold text-2xl">{phrases[currentPhraseIndex]}</p>
  );
};

export default TextRotator;
