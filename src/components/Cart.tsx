import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';

import { AppSetStateContext, AppStateContext } from './AppState';

import styles from './Cart.module.css';

interface Props {}

interface State {
  isOpen: boolean;
}

class Cart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  handleClick = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    return (
      <AppStateContext.Consumer>
        {state => {
          return (
            <div className={styles.cartContainer}>
              <button
                className={styles.button}
                type="button"
                onClick={this.handleClick}
              >
                <FiShoppingCart />
                <span>{state.cart.items.length} pizza(s)</span>
              </button>
              <div
                className={styles.cartDropDown}
                style={{
                  display: this.state.isOpen ? 'block' : 'none',
                }}
              >
                <ul>
                  {state.cart.items.map(item => (
                    <li key={item.id}>
                      {item.name} &times; {item.quantity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        }}
      </AppStateContext.Consumer>
    );
  }
}

export default Cart;
