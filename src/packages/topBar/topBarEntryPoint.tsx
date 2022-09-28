import { EntryPoint, Shell } from 'repluggable';
import { MainViewAPI } from '../mainView/mainViewAPI';
import { TopBarAPI, createTopBarAPI, componentsSlotKey } from './topBarAPI';
import { TopBarComponent } from './topBarComponent';

export const TopBarEntryPoint: EntryPoint = {
   name: 'TOPBAR',

   getDependencyAPIs() {
      return [MainViewAPI];
   },

   declareAPIs() {
      return [TopBarAPI];
   },

   attach(shell: Shell) {
      shell.contributeAPI(TopBarAPI, () => createTopBarAPI(shell));
   },

   extend(shell) {
      shell.getAPI(MainViewAPI).contributeComponent(shell, {
         component: () => <TopBarComponent slot={shell.getSlot(componentsSlotKey)} />,
      });
   },
};
