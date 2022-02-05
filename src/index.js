import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import reducers from './reducers';    // ./reduces/index.js

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// 프로젝트에서 Redux store 참조할 수 있도록, createStore()에 reducers를 넘겨 store 생성하고
// Provider 컴포넌트(최상위)로 App을 감싼 후 props로 넘김