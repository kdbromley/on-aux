import React from 'react';
import ReactDOM from 'react-dom';
import BrowserRouter from 'react-router-dom';
import CreatePost from './CreatePost';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <CreatePost />,
    div);
    ReactDOM.unmountComponentAtNode(div);
  })