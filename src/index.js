import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import ToDoApp from './todoApp';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ToDoApp title="ToDo App"/>
);

