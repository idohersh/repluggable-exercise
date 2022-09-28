import { EntryPoint, Shell } from 'repluggable';
import { CounterAPI, createCounterAPI } from '../API/CounterAPI';
import { counterReducer, CounterState } from '../state/counterState';

export const CounterAPIEntryPoint: EntryPoint = {
   name: 'COUNTER STATE',

   declareAPIs() {
      return [CounterAPI];
   },

   attach(shell: Shell) {
      shell.contributeState<CounterState>(() => ({
         counter: counterReducer,
      }));
      shell.contributeAPI(CounterAPI, () => createCounterAPI(shell));
   },
};
