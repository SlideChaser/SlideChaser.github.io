import React, {useState, useEffect, useRef} from 'react';

import '../css/components/grid-system/_frontGrid.scss';

function FrontPage(){

	// Set states for fuzzy blow up light ball
	const [counter, setCounter] = useState(100);
	const [click, setClick] = useState(false);
	const intervalRef = useRef(null);

	// Set adjustable style for fuzzy blow up light ball
	const circleAdjustStyle = {
		height: `${counter}px`,
		width: `${counter}px`
	};

	// Fuzzy blow up light ball effect
	useEffect(()=>{
		clearInterval(intervalRef.current);
		if(click){
			if(counter > 200){
				clearInterval(intervalRef.current);
				intervalRef.current = null;
			}else{
				intervalRef.current = setInterval(()=> setCounter(prevCounter => prevCounter + 1), 10);
			}
		}
		else if(!click){
			if(counter < 101){
				clearInterval(intervalRef.current);
				intervalRef.current = null;
			}else{
				intervalRef.current = setInterval(()=> setCounter(prevCounter => prevCounter - 1), 1);
			}
		}
	}, [counter, click]);

	// function startCounter(dir){
	// 	if(counter > 200 || counter < 101){
	// 		return;
	// 	} else {
	// 		clearInterval(intervalRef.current);
	// 		intervalRef.current = null;
	// 	}
  //   intervalRef.current = setInterval(()=>{
	// 			setCounter(prevCounter => dir === '+' ? prevCounter + 1 : prevCounter - 1);
	// 			console.log(counter);
	// 	}, 10);
  // }

	// useEffect(()=>{
	// 	return ()=> stopCounter();
	// });

	// function stopCounter(){
	// 	clearInterval(intervalRef.current);
	// 	intervalRef.current = null;
	// }

	return(
		<div className='frontGrid'>
			{/* SVG Glow Paths */}
			<svg className='gridBack' xmlns="http://www.w3.org/2000/svg" viewBox='0 0 2000 1000'>
				<path className='svgGlow' fill='#000' d="
						M 50,0 
						L 50,200 L 150,350 L 150,600 L 100,700
						L 100,1000 L 150,1000
						L 150,710 L 200,610 L 200,340 L 100,190
						L 100,0 Z
					"
				></path>
				<path className='svgGlow' fill='#000' d="
						M 500,0
						L 500,100 L 450,150 L 450,350 L 400,400
						L 400,1000 L 450,1000
						L 450,420 L 500,375 L 500,160 L 550,110
						L 550,0 Z
					"
				></path>
				<path className='svgGlow' fill='#000' d="
						M 1000,0
						L 1000,50 L 1100,150 L 1100,700 L 1000,800 L 1000,930
						L 1050,1000 L 1100,1000
						L 1050,930 L 1050,810 L 1150,710 L 1150,140 L 1050,40
						L 1050,0Z
					"
				></path>
				<path className='svgGlow' fill='#000' d='
						M 1500,0
						L 1500,80 L 1450,130 L 1450,500 L 1400,550 L 1400,650 L 1600,800
						L 1600,1000 L 1650,1000
						L 1650,790 L 1450,640 L 1450,560 L 1500,510 L 1500,140 L 1550,90
						L 1550,0 Z
					'
				></path>

				{/* Main SVG Paths */}
				<path className='hoverOp1' fill='#fff' d="
						M 50,0 
						L 50,200 L 150,350 L 150,600 L 100,700
						L 100,1000 L 150,1000
						L 150,710 L 200,610 L 200,340 L 100,190
						L 100,0 Z
					"
				></path>
				<path className='hoverOp1' fill='#fff' d="
						M 500,0
						L 500,100 L 450,150 L 450,350 L 400,400
						L 400,1000 L 450,1000
						L 450,420 L 500,375 L 500,160 L 550,110
						L 550,0 Z
					"
				></path>
				<path className='hoverOp1' fill='#fff' d="
						M 1000,0
						L 1000,50 L 1100,150 L 1100,700 L 1000,800 L 1000,930
						L 1050,1000 L 1100,1000
						L 1050,930 L 1050,810 L 1150,710 L 1150,140 L 1050,40
						L 1050,0 Z
					"
				></path>
				<path className='hoverOp1' fill='#fff' d='
						M 1500,0
						L 1500,80 L 1450,130 L 1450,500 L 1400,550 L 1400,650 L 1600,800
						L 1600,1000 L 1650,1000
						L 1650,790 L 1450,640 L 1450,560 L 1500,510 L 1500,140 L 1550,90
						L 1550,0 Z
					'
				></path>
			</svg>
			<div className="fuzzyBallTest">
				{/* If you try to return a function here it will run immediately. You have to put it in an arrow function so that it Functions like a callback */}
				<div
					className="fuzzyBall hoverOp1"
					style={circleAdjustStyle}
					// onMouseDown={()=> startCounter('+')}
					// onMouseUp={()=> startCounter('-')}
					onMouseDown={()=> setClick(true)}
					onMouseUp={()=> setClick(false)}
				/>
			</div>
		</div>
	);
}

export default FrontPage;