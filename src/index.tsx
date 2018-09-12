import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import configureStore from './configureStore'

declare global {
  interface Window {
    devToolsExtension(data?: any): any,
  }
}

const store = configureStore()

ReactDOM.render(<App store={store} />, document.getElementById('root') as HTMLElement);
registerServiceWorker();
