import React, {useState, useEffect, useRef} from 'react';

function FrontPage(){

	const [counter, setCounter] = useState(100);
	const intervalRef = useRef(null);

	useEffect(()=>{
		return ()=> stopCounter(); // Stop counter when app is unmounted
	}, []);

	const circleAdjustStyle = {
		height: `${counter}px`,
		width: `${counter}px`
	};

	function startCounter(){
		if(intervalRef.current) return;
		intervalRef.current = setInterval(()=> setCounter(prevCounter => prevCounter + 1), 10);
		console.log(intervalRef.current);
	}

	function reverseCounter(){
		if(intervalRef.current){
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(()=> setCounter(prevCounter => prevCounter - 1), 1);
    }
	}

	function stopCounter(){
		if(intervalRef.current){
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
	}

	useEffect(()=>{
		if(counter < 101){
			clearInterval(intervalRef.current);
			intervalRef.current = null;
		}
	}, [counter]);


	const [theTime, setTheTime] = useState(new Date().toLocaleString());
	const [show, setShow] = useState(false);
	const [pokemon, setPokemon] = useState({});

	setTimeout(()=>{
		setTheTime(new Date().toLocaleString());
	},
	1000);

	// This useEffect is being run whenever show changes
	useEffect(()=>{
		// The contents is Only being run if show is True
		if(show){
			fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
			.then(function(poop){return poop.json();})
			.then(obj=>{
				console.log(obj);
				setPokemon(obj);
			})
			.catch(err=>console.log('error:', err));


		}
	}, [show]);

	return(
		<div className='frontGrid'>
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
					onMouseDown={startCounter}
					onMouseUp={reverseCounter}
					onMouseEnter={()=>setShow(false)} className="fuzzyBall"
					style={circleAdjustStyle}
				/>
			</div>
		</div>
	);
}

export default FrontPage;