import React from 'react';
import ReactDOM from 'react-dom';
import SealGenegrator from './SealGenegrator';

it('SealGenegrator renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SealGenegrator />, div);
});