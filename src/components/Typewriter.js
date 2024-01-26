import React, { useEffect, useState, useCallback } from 'react';

const Typewriter = React.memo(() => {
  const word = "Marketing alpha";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const type = useCallback(() => {
    const currentText = word.substring(0, index);
    setDisplayText(currentText);

    if (isDeleting) {
      setIndex((prevIndex) => prevIndex - 1);
      if (index === 0) {
        setIsDeleting(false);
      }
    } else {
      setIndex((prevIndex) => prevIndex + 1);
      if (index === word.length) {
        setIsDeleting(true);
      }
    }
  }, [word, index, isDeleting]);

  useEffect(() => {
    const interval = setInterval(type, isDeleting ? 300 : 200);
    return () => clearInterval(interval);
  }, [type, isDeleting]);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <h1 id="typewriter" className="text-6xl font-bold">
        {displayText}
        <span className="animate-blink cursor">|</span>
      </h1>
    </div>
  );
});

export default Typewriter;
