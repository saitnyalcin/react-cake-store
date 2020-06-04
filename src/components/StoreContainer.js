import React from 'react';
import { useSelector } from 'react-redux';
import ChocolateCake from '../images/chocolateCake.png';
import ChocolateCakeView from './ChocolateCakeView';

const StoreContainer = () => {
  const chocolate = useSelector(state => state.totalNumOfChocolateCakes);
  const name = useSelector(state => state.name);

  return (
    <ChocolateCakeView
      cakeName={name}
      cakeImage={ChocolateCake}
      totalNumOfCakes={chocolate}
    />
  );
};

export default StoreContainer;
