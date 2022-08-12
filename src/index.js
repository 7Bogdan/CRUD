import React from 'react';
import ReactDOM from 'react-dom';
import LocalStorage from './page/storage/Storage';
import Posts from './page/posts/Posts'
import './style.css';

ReactDOM.render(
  <div>
  <LocalStorage />
  <Posts/>
  </div>,
document.getElementById('root')
);
