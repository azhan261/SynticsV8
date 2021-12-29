import React from 'react';
import ReactDOM from 'react-dom';
import RegistrationAuth from './RegistrationAuth';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RegistrationAuth />, div);
  ReactDOM.unmountComponentAtNode(div);
});
