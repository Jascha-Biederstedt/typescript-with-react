import React from 'react';

import pizzas from '../data/pizzas.json';
import Pizza from './pizza';

import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.container}>
      <ul>
        {pizzas.map(pizza => (
          <Pizza key={pizza.id} pizza={pizza} />
        ))}
      </ul>
    </div>
  );
};

export default App;
