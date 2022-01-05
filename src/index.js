import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Routes} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import './css/index.scss';
import FrontPage from './front-page/FrontPage';

ReactDOM.render(
  <HashRouter>
		<Routes>
			<Route path='/' element={<FrontPage/>}/>
		</Routes>
  </HashRouter>,
  document.getElementById('root') 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
