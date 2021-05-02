import React from 'react';
import ReactDOM from 'react-dom';
import BrowserRouter from 'react-router-dom';
import MyAccountPage from './MyAccountPage';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <MyAccountPage />,
    div);
    ReactDOM.unmountComponentAtNode(div);
  })