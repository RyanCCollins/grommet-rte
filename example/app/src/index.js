import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.css';

const rootEl = document.getElementById('root');
const render = Component =>
  ReactDOM.render( // eslint-disable-line react/no-render-return-value
    <AppContainer>
      <Component />
    </AppContainer>,
    rootEl,
  );

render(App);
if (module.hot) module.hot.accept('./App', () => render(App));
