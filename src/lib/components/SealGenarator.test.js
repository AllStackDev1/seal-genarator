import React from 'react';
import ReactDOM from 'react-dom';
import SealGenarator from './SealGenarator';

it('SealGenarator renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SealGenarator />, div);
});