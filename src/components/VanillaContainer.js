import React from 'react';
import { useSelector } from 'react-redux';
import VanillaCake from '../images/vanillaCake.png';
import VanillaCakeVIew from './VanillaCakeVIew';

const VanillaContainer = () => {
  const vanilla = useSelector(state => state.vanilla.totalNumOfVanillaCakes);
  const name = useSelector(state => state.vanilla.name);

  return (
    <VanillaCakeVIew
      cakeName={name}
      cakeImage={VanillaCake}
      totalNumOfCakes={vanilla}
    />
  );
};

export default VanillaContainer;
