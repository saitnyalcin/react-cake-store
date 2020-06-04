import React from 'react';

const CakeCardView = ({ cakeType, cakeImage, quantity, stock }) => {
  return (
    <div className="flex-container">
      <div className="cake-image">
        <img src={cakeImage} alt="" />
      </div>
      <div>Type : {cakeType}</div>
      <div>{quantity} cake available</div>
      <div>{stock ? 'In stock' : 'Not in stock'}</div>
      <div>
        {stock ? (
          <button type="button" className="btn btn-primary">
            Buy Cake
          </button>
        ) : (
          <button type="button" className="btn btn-primary" disabled>
            Buy Cake
          </button>
        )}
      </div>
    </div>
  );
};

export default CakeCardView;
