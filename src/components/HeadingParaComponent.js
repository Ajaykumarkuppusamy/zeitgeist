import React from 'react';

const HeadingParaComponent = ({ heading, paragraph }) => {
  return (
    <div>
      <h2 className="text-white p-4 text-3xl font-semibold">{heading}</h2>
      <p className="text-indigo-600 p-4 text-xl">{paragraph}</p>
    </div>
  );
};

export default HeadingParaComponent;

