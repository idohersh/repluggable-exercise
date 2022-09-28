import React from 'react';
import { EntryPoint } from 'repluggable';
import { MainViewAPI, createMainViewAPI, componentsSlotKey } from './mainViewAPI';
import { MainViewComponent } from './mainViewComponent';

export const MainViewPackage: EntryPoint[] = [
   {
      name: 'MAIN_VIEW',

      declareAPIs() {
         return [MainViewAPI];
      },

      attach(shell) {
         shell.contributeAPI(MainViewAPI, () => createMainViewAPI(shell));
         // console.log(shell.getStore().);
      },

      extend(shell) {
         shell.contributeMainView(shell, () => (
            <MainViewComponent slot={shell.getSlot(componentsSlotKey)} />
         ));
      },
   },
];
