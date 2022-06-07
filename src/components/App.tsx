import React from 'react';

import Pizza from './pizza';
import Cart from './Cart';

import pizzas from '../data/pizzas.json';
import PizzaSVG from '../svg/pizza.svg';

import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <PizzaSVG width={120} height={120} />
        <div className={styles.siteTitle}>Delicious Pizza</div>
        <Cart />
      </div>
      <ul>
        {pizzas.map(pizza => (
          <Pizza key={pizza.id} pizza={pizza} />
        ))}
      </ul>
    </div>
  );
};

export default App;
