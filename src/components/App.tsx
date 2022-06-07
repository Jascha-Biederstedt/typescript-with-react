import React from 'react';

import pizzas from '../data/pizzas.json';
import Pizza from './pizza';

const App = () => {
  return (
    <ul>
      {pizzas.map(pizza => (
        <Pizza key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
};

export default App;
