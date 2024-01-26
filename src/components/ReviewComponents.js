import React from 'react';

const ReviewComponents = ({ heading, paragraph }) => {
  return (
    <div className="w-1/3 p-4">
      <h2 className="text-indigo-600 p-4 text-3xl font-semibold">{heading}</h2>
      <p className="text-white p-4 text-base">{paragraph}</p>
    </div>
  );
};

export default ReviewComponents;

