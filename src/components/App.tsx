import React from 'react';

import pizzas from '../data/pizzas.json';
import Pizza from './pizza';
import PizzaSVG from '../svg/pizza.svg';

import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <PizzaSVG width={120} height={120} />
        <div className={styles.siteTitle}>Delicious Pizza</div>
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
