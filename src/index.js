import React from 'react';
import ReactDOM from 'react-dom';
import Storage from './page/storage/Storage';
import Posts from './page/posts/Posts'
import './index.css';

ReactDOM.render(
  <div>
  <Storage />
  <Posts/>
  </div>,
document.getElementById('root')
);
