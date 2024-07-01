import React from 'react';
import {store} from './store/store.ts';
import {Provider} from 'react-redux';
import {Navigation} from './navigation';

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};
