// @flow
import React, { Component } from 'react';
// $FlowFixMe
import { Toolbar, Editor } from 'components'; // eslint-disable-line

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  render() {
    return (
      <div style={{ display: 'flex', height: '100vh', width: '100vw', alignItems: 'center', justifyContent: 'center' }}>
        <div>
          <Editor />
        </div>
      </div>
    );
  }
}
