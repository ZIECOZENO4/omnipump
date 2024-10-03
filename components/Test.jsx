import React from 'react';

const Card = ({ number }) => (
  <div className="bg-gray-200 p-4 rounded-lg shadow-md">
    <h2 className="text-xl font-bold">Card {number}</h2>
    <p>This is card number {number}</p>
  </div>
);

const CardGrid = () => {
  return (
    <div className="hidden md:block w-screen container mx-auto px-4 my-8">
      <div className="grid grid-cols-4 gap-4">
        {[...Array(10)].map((_, index) => (
          <Card key={index} number={index + 1} />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;