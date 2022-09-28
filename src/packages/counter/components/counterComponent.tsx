import React from 'react';
import { connectWithShell, Shell } from 'repluggable';
import { CounterAPI } from '../API/CounterAPI';

import styles from './counterComponent.module.css';

export const CounterComponent: React.FC<CounterStateProps> = ({ counter }) => {
   return <div className={styles.counter}>{counter}</div>;
};

type CounterStateProps = {
   counter: number;
};

export const createCounter = (boundShell: Shell) =>
   connectWithShell(
      (shell, state) => {
         return {
            counter: shell.getAPI(CounterAPI).getCounter(),
         };
      },
      undefined,
      boundShell
   )(CounterComponent);
