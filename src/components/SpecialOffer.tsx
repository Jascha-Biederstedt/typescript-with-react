import React from 'react';

import { PizzaInterface } from '../types';
import { WithAddToCartProps } from './AddToCart';

import styles from './SpecialOffer.module.css';

interface Props {
  pizza: PizzaInterface;
}

const SpecialOffer: React.FC<Props> = ({ pizza }) => {
  return (
    <div className={styles.container}>
      <span className={styles.special}>Special Offer</span>
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <p>{pizza.price}</p>
      <WithAddToCartProps>
        {({ addToCart }) => {
          return (
            <button
              className={styles.button}
              type="button"
              onClick={() =>
                addToCart({
                  id: pizza.id,
                  name: pizza.name,
                  price: pizza.price,
                })
              }
            >
              Add to Cart
            </button>
          );
        }}
      </WithAddToCartProps>
    </div>
  );
};

export default SpecialOffer;
