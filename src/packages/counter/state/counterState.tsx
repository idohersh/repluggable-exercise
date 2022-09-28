import { Action } from 'redux';

export interface CounterState {
   counter: number;
}

export function counterReducer(state: number = 0, action: Action) {
   if (action.type === 'INCREMENT') {
      console.log('INCREMENT');
      return state + 1;
   }
   if (action.type === 'DECREMENT') {
      return state - 1;
   }
   return state;
}
