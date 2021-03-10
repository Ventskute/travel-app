import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import Main from './views/Main/Main';
import { load, parseSave, save, setDefault } from './utils/save';

const rootElement = document.getElementById('root');

function App() {
  useEffect(() => {
    if (!load()) setDefault();
    parseSave();

	// check fullscreen
    const query = matchMedia('all and (display-mode: fullscreen');

    query.onchange = (e) => {
      const checkbox = document.querySelector('.checkbox.fullscreen');
      checkbox && (checkbox.checked = query.matches);
    };
  }, [])

  return <>
    <Main/>
  </>;
}

ReactDOM.render(
  <App />,
  rootElement);