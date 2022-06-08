import React from 'react';

import { PizzaInterface } from '../types';
import { useStateDispatch } from './AppState';

import styles from './SpecialOffer.module.css';

interface Props {
  pizza: PizzaInterface;
}

const SpecialOffer: React.FC<Props> = ({ pizza }) => {
  const dispatch = useStateDispatch();

  const handleAddToCartClick = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        item: {
          id: pizza.id,
          name: pizza.name,
          price: pizza.price,
        },
      },
    });
  };

  return (
    <div className={styles.container}>
      <span className={styles.special}>Special Offer</span>
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <p>{pizza.price}</p>
      <button
        className={styles.button}
        type="button"
        onClick={handleAddToCartClick}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default SpecialOffer;
