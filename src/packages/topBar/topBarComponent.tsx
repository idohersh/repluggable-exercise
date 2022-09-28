import React, { FunctionComponent } from 'react';
import { ExtensionSlot, SlotRenderer } from 'repluggable';
import { ContributedComponent } from './topBarAPI';
import styles from './topBarComponent.module.css';

type TopBarComponent = FunctionComponent<{ slot: ExtensionSlot<ContributedComponent> }>;

const slotItemToComp = ({ component }: ContributedComponent) => {
   return component;
};

export const TopBarComponent: TopBarComponent = ({ slot }) => {
   return (
      <div className={styles.topBar}>
         Top Bar
         <SlotRenderer slot={slot} mapFunc={slotItemToComp} />
      </div>
   );
};
