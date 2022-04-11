import React from 'react';
import './App.css';
import Home from './views/Home';
import { store } from './store/index';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
