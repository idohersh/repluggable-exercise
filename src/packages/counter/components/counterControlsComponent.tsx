import React, { FunctionComponent } from 'react';
import { connectWithShell, Shell } from 'repluggable';
import styles from './counterControlsComponent.module.css';

export const CounterControlsComponent: FunctionComponent<CounterControlsDispatchProps> = ({
   increment,
   decrement,
}) => {
   console.log('controls');

   function handleIncrementClick() {
      increment();
   }

   function handleDecrementClick() {
      decrement();
   }

   return (
      <div className={styles.counterControls}>
         <button onClick={handleDecrementClick} className={styles.button}>
            -
         </button>
         <button onClick={handleIncrementClick} className={styles.button}>
            +
         </button>
      </div>
   );
};

type CounterControlsDispatchProps = {
   increment(): void;
   decrement(): void;
};

export const createCounterControls = (boundShell: Shell) =>
   connectWithShell(
      undefined,

      (shell, dispatch) => {
         return {
            // some actions may alter your own state
            increment(): void {
               dispatch({ type: 'INCREMENT' });
            },
            // others may request actions from other packages' APIs
            decrement() {
               dispatch({ type: 'DECREMENT' });
            },
         };
      },
      boundShell
   )(CounterControlsComponent);
