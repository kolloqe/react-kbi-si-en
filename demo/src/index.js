import React from 'react';
import ReactDOM from 'react-dom/client';
import KeyboardInput from '../../src/index';

let root = ReactDOM.createRoot(document.getElementById("demo"));
root.render(
  <React.StrictMode>
    <KeyboardInput interface="textfield" fullWidth={true}/>
  </React.StrictMode>
);
