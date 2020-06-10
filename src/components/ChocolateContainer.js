import React from 'react';
import { useSelector } from 'react-redux';
import ChocolateCake from '../images/chocolateCake.png';
import ChocolateCakeView from './ChocolateCakeView';

const ChocolateContainer = () => {
  // calling the props using useSelector
  const chocolate = useSelector(
    state => state.chocolate.totalNumOfChocolateCakes
  );
  const name = useSelector(state => state.chocolate.name);
  const price = useSelector(state => state.chocolate.price);

  return (
    <ChocolateCakeView
      cakeName={name}
      cakeImage={ChocolateCake}
      totalNumOfCakes={chocolate}
      price={price}
    />
  );
};

export default ChocolateContainer;
