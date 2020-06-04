import React from 'react';
import ChocolateCake from '../images/cake.png';
import CakeCardView from './CakeCardView';

const CakeContainer = () => {
  let stock = false;

  return (
    <div className="container">
      <CakeCardView
        cakeType="Chocolate"
        cakeImage={ChocolateCake}
        quantity="10"
        stock={stock}
      />
      <CakeCardView
        cakeType="Chocolate"
        cakeImage={ChocolateCake}
        quantity="10"
        stock="available"
      />
      <CakeCardView
        cakeType="Chocolate"
        cakeImage={ChocolateCake}
        quantity="10"
        stock="available"
      />
    </div>
  );
};

export default CakeContainer;
