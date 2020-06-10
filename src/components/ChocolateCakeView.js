import React from 'react';
import { useDispatch } from 'react-redux';
import { buyCake } from '../redux';

const ChocolateCakeView = ({ cakeName, cakeImage, totalNumOfCakes, price }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex-container">
      <div className="cake-image">
        <img src={cakeImage} alt="" />
      </div>

      <div>
        <h3>{cakeName}</h3>
      </div>
      <div>
        <h3>Quantity: {totalNumOfCakes}</h3>
      </div>
      <div>
        <h3>${price}</h3>
      </div>
      <div>
        {totalNumOfCakes > 0 ? (
          <button
            onClick={() => dispatch(buyCake())}
            type="button"
            className="btn btn-success"
          >
            Buy Cake
          </button>
        ) : (
          <button type="button" className="btn btn-default" disabled>
            Not in stock
          </button>
        )}
      </div>
    </div>
  );
};

export default ChocolateCakeView;
