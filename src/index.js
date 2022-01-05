import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Routes, Route} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import './css/index.scss';
import FrontPage from './front-page/FrontPage';

import TheBar from './the-bar/TheBar';

function Index(){
	return(
		<HashRouter>
			<Routes>
				<Route exact path='/' element={<FrontPage/>}/>
				<Route exact path='/the-bar' element={<TheBar/>}/>
			</Routes>
		</HashRouter>
	)
}

ReactDOM.render(<Index/>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
