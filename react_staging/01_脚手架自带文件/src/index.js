import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 入口文件
// 将app组件 挂载在index.html的id为root的div中
// React.StrictMode 帮你检查下代码中不太合理的地方，比如ref采用了官网不推荐的字符串形式 ref="xxx"
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
