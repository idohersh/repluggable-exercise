import { EntryPoint, Shell } from 'repluggable';
import { MainViewAPI } from '../../mainView';
import { TopBarAPI } from '../../topBar';
import { CounterAPI } from '../API/CounterAPI';
import { createCounter } from '../components/counterComponent';
import { createCounterControls } from '../components/counterControlsComponent';

export const CounterUIEntryPoint: EntryPoint = {
   name: 'COUNTER_UI',

   getDependencyAPIs() {
      return [TopBarAPI, MainViewAPI, CounterAPI];
   },

   extend(shell) {
      const CounterComponent = createCounter(shell);
      const CounterControlsComponent = createCounterControls(shell);
      shell.getAPI(TopBarAPI).contributeComponent(shell, {
         component: () => <CounterControlsComponent />,
      });

      shell.getAPI(MainViewAPI).contributeComponent(shell, {
         component: () => <CounterComponent />,
      });
   },
};
