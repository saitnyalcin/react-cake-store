import React from 'react';
import { useSelector } from 'react-redux';
import VanillaCake from '../images/vanillaCake.png';
import VanillaCakeVIew from './VanillaCakeVIew';

const VanillaContainer = () => {
  // calling the props using useSelector
  const vanilla = useSelector(state => state.vanilla.totalNumOfVanillaCakes);
  const name = useSelector(state => state.vanilla.name);
  const price = useSelector(state => state.vanilla.price);

  return (
    <VanillaCakeVIew
      cakeName={name}
      cakeImage={VanillaCake}
      totalNumOfCakes={vanilla}
      price={price}
    />
  );
};

export default VanillaContainer;
