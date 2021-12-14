import React, {useState, useEffect, useRef} from 'react';

import '../css/components/grid-system/_frontGrid.scss';

function FrontPage(){

	// Set states for fuzzy blow up light ball
	const [counter, setCounter] = useState(100);
	// const [click, setClick] = useState(false);
	const intervalRef = useRef(null);

	// Set adjustable style for fuzzy blow up light ball
	const circleAdjustStyle = {
		height: `${counter}px`,
		width: `${counter}px`
	};

	// Fuzzy blow up light ball effect
	// useEffect(()=>{
	// 	clearInterval(intervalRef.current);
	// 	if(click){
	// 		if(counter > 200){
	// 			clearInterval(intervalRef.current);
	// 			intervalRef.current = null;
	// 		}else{
	// 			intervalRef.current = setInterval(()=> setCounter(prevCounter => prevCounter + 1), 10);
	// 		}
	// 	}
	// 	else if(!click){
	// 		if(counter < 101){
	// 			clearInterval(intervalRef.current);
	// 			intervalRef.current = null;
	// 		}else{
	// 			intervalRef.current = setInterval(()=> setCounter(prevCounter => prevCounter - 1), 1);
	// 		}
	// 	}
	// }, [counter, click]);

	function startCounter(dir){
		if(counter > 200 || counter < 101){
			return;
		} else {
			clearInterval(intervalRef.current);
			intervalRef.current = null;
		}
    intervalRef.current = setInterval(()=>{
				setCounter(prevCounter => dir === '+' ? prevCounter + 1 : prevCounter - 1);
				console.log(counter);
		}, 10);
  }

	// useEffect(()=>{
	// 	return ()=> stopCounter();
	// });

	// function stopCounter(){
	// 	clearInterval(intervalRef.current);
	// 	intervalRef.current = null;
	// }

	// Learning state area
	const [theTime, setTheTime] = useState(new Date().toLocaleString());
	const [show, setShow] = useState(false);
	const [pokemon, setPokemon] = useState({});

	setTimeout(()=> setTheTime(new Date().toLocaleString()),1000);

	// This useEffect is being run whenever show changes
	useEffect(()=>{
		// The contents is Only being run if show is True
		if(show){
			fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
			.then(function(poop){return poop.json();})
			.then(obj=>setPokemon(obj))
			.catch(err=>console.log('error:', err));
		}
	}, [show]);

	return(
		
		<div className="gradientBack">
			<div className='frontGrid'>
				<svg className='gridBack' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
					<path className='svgGlow' fill="#fff" fillOpacity=".6" d="M0,288L0,160L49.7,160L49.7,32L99.3,32L99.3,128L149,128L149,64L198.6,64L198.6,32L248.3,32L248.3,160L297.9,160L297.9,256L347.6,256L347.6,160L397.2,160L397.2,224L446.9,224L446.9,192L496.6,192L496.6,32L546.2,32L546.2,64L595.9,64L595.9,64L645.5,64L645.5,32L695.2,32L695.2,224L744.8,224L744.8,256L794.5,256L794.5,160L844.1,160L844.1,160L893.8,160L893.8,64L943.4,64L943.4,128L993.1,128L993.1,32L1042.8,32L1042.8,0L1092.4,0L1092.4,32L1142.1,32L1142.1,64L1191.7,64L1191.7,96L1241.4,96L1241.4,192L1291,192L1291,96L1340.7,96L1340.7,128L1390.3,128L1390.3,128L1440,128L1440,320L1390.3,320L1390.3,320L1340.7,320L1340.7,320L1291,320L1291,320L1241.4,320L1241.4,320L1191.7,320L1191.7,320L1142.1,320L1142.1,320L1092.4,320L1092.4,320L1042.8,320L1042.8,320L993.1,320L993.1,320L943.4,320L943.4,320L893.8,320L893.8,320L844.1,320L844.1,320L794.5,320L794.5,320L744.8,320L744.8,320L695.2,320L695.2,320L645.5,320L645.5,320L595.9,320L595.9,320L546.2,320L546.2,320L496.6,320L496.6,320L446.9,320L446.9,320L397.2,320L397.2,320L347.6,320L347.6,320L297.9,320L297.9,320L248.3,320L248.3,320L198.6,320L198.6,320L149,320L149,320L99.3,320L99.3,320L49.7,320L49.7,320L0,320L0,320Z"></path>
				</svg>
				<svg className='gridBack' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
					<path fill="#fff" fillOpacity=".9" d="M0,288L0,160L49.7,160L49.7,32L99.3,32L99.3,128L149,128L149,64L198.6,64L198.6,32L248.3,32L248.3,160L297.9,160L297.9,256L347.6,256L347.6,160L397.2,160L397.2,224L446.9,224L446.9,192L496.6,192L496.6,32L546.2,32L546.2,64L595.9,64L595.9,64L645.5,64L645.5,32L695.2,32L695.2,224L744.8,224L744.8,256L794.5,256L794.5,160L844.1,160L844.1,160L893.8,160L893.8,64L943.4,64L943.4,128L993.1,128L993.1,32L1042.8,32L1042.8,0L1092.4,0L1092.4,32L1142.1,32L1142.1,64L1191.7,64L1191.7,96L1241.4,96L1241.4,192L1291,192L1291,96L1340.7,96L1340.7,128L1390.3,128L1390.3,128L1440,128L1440,320L1390.3,320L1390.3,320L1340.7,320L1340.7,320L1291,320L1291,320L1241.4,320L1241.4,320L1191.7,320L1191.7,320L1142.1,320L1142.1,320L1092.4,320L1092.4,320L1042.8,320L1042.8,320L993.1,320L993.1,320L943.4,320L943.4,320L893.8,320L893.8,320L844.1,320L844.1,320L794.5,320L794.5,320L744.8,320L744.8,320L695.2,320L695.2,320L645.5,320L645.5,320L595.9,320L595.9,320L546.2,320L546.2,320L496.6,320L496.6,320L446.9,320L446.9,320L397.2,320L397.2,320L347.6,320L347.6,320L297.9,320L297.9,320L248.3,320L248.3,320L198.6,320L198.6,320L149,320L149,320L99.3,320L99.3,320L49.7,320L49.7,320L0,320L0,320Z"></path>
				</svg>
				<div className="testArea">
					<h1 className='backgroundColor'>The current time is: {theTime}</h1>
					{/* This is how we can choose what to show in jsx: */}
					{show
					? <p>{pokemon.name}</p>
					: <button onClick={()=>setShow(true)}>hello</button>}
				</div>
				<div className="fuzzyBallTest">
					{/* If you try to return a function here it will run immediately. You have to put it in an arrow function so that it Functions like a callback */}
					<div
						onMouseDown={()=> startCounter('+')}
						onMouseUp={()=> startCounter('-')}
						onMouseEnter={()=> setShow(false)} className="fuzzyBall"
						style={circleAdjustStyle}
					/>
				</div>
			</div>
		</div>
	);
}

export default FrontPage;