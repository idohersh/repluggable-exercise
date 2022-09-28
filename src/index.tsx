import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { createAppHost, AppMainView } from 'repluggable';

import { MainViewPackage } from './packages/mainView';
import { TopBarEntryPoint } from './packages/topBar';
import CounterEntryPoints from './packages/counter';

const [CounterUIEntryPoint, CounterAPIEntryPoint] = CounterEntryPoints;

const host = createAppHost([
   MainViewPackage,
   TopBarEntryPoint,
   CounterUIEntryPoint,
   CounterAPIEntryPoint,
]);

ReactDOM.render(<AppMainView host={host} />, document.getElementById('root'));
