import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Routes, Route} from 'react-router-dom';

import FrontPage from './components/FrontPage';

function Main(){
  return(
		<HashRouter>
			<Routes>
				<Route path="/" element={<FrontPage/>}/>
			</Routes>
		</HashRouter>
  );
}

ReactDOM.render(<Main/>, document.getElementById('app'));

if(module.hot){
	module.hot.accept((err)=>{
		console.log('hi');
	});
}