import React, { FunctionComponent } from 'react';
import { ExtensionSlot, SlotRenderer } from 'repluggable';
import { ContributedComponent } from './mainViewAPI';
import styles from './mainViewComponent.module.css';

type MainViewComponent = FunctionComponent<{ slot: ExtensionSlot<ContributedComponent> }>;

const slotItemToComp = ({ component }: ContributedComponent) => {
   return component;
};

export const MainViewComponent: MainViewComponent = ({ slot }) => (
   <div className={styles.mainView}>
      <p>mainView</p>
      <div className={styles.slotWrapper}>
         <SlotRenderer slot={slot} mapFunc={slotItemToComp} />
      </div>
   </div>
);
