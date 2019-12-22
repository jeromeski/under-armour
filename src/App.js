import React, { Fragment } from 'react';

import './App.css';
import GlobalMenu from './components/global-menu/GlobalMenu';

function App() {
  return (
    <Fragment className="App">
      <GlobalMenu
        style={{
          position: 'relative'
        }}
      />
    </Fragment>
  );
}

export default App;
