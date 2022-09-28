import { Shell, SlotKey } from 'repluggable';
import { CounterState } from '../state/counterState';

export interface CounterAPI {
   getCounter(): number;
   incrementCounter(): void;
   decrementCounter(): void;
}

export const CounterAPI: SlotKey<CounterAPI> = {
   name: 'Counter API',
   public: true,
};

export const createCounterAPI = (shell: Shell): CounterAPI => {
   const entryPointStore = shell.getStore<CounterState>();

   const getState = () => entryPointStore.getState();

   return {
      // example of selector
      getCounter(): number {
         const state: CounterState = getState();
         return state.counter;
      },
      // example of action dispatcher

      incrementCounter(): void {
         entryPointStore.dispatch({ type: 'INCREMENT' });
      },

      decrementCounter(): void {
         entryPointStore.dispatch({ type: 'DECREMENT' });
      },
   };
};
