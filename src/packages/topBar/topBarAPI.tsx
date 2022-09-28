import { ReactComponentContributor, Shell, SlotKey } from 'repluggable';

export interface ContributedComponent {
   component: ReactComponentContributor;
}

export interface TopBarAPI {
   contributeComponent(fromShell: Shell, contribution: ContributedComponent): void;
}

export const TopBarAPI: SlotKey<TopBarAPI> = {
   name: 'Top Bar API',
   public: true,
};

export const componentsSlotKey: SlotKey<ContributedComponent> = {
   name: 'topBarContributedComponent',
};

export const createTopBarAPI = (shell: Shell): TopBarAPI => {
   const componentsSlot = shell.declareSlot(componentsSlotKey);
   return {
      contributeComponent(fromShell, contribution) {
         componentsSlot.contribute(fromShell, contribution);
      },
   };
};
