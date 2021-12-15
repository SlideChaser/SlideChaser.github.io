import React, {useState, useEffect} from 'react';

import {animated, useSpring} from 'react-spring';

import '../css/components/grid-system/_frontGrid.scss';

function FrontPage(){

	const [clicked, setClicked] = useState(false);
	const [hover, setHover] = useState(false);

	const {size} = useSpring({
		size: clicked ? 200 : 100,
		from: {
			size: 200
		},
		config: {duration: clicked ? 1000 : 100}
	});

	function checkHover(prev){
		setHover(prev ? true : false);
		// setter debug:
		// console.log(hover);
		setTimeout(()=>{
			hover ? setClicked(true) : setClicked(false);
		}, 250);
	}

	// render debug:
	// useEffect(()=>{
	// 	console.log('render');
	// })
	

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
				<animated.div
					className="fuzzyBall hoverOp1"

					style={{height: size, width: size}}
					
					onMouseDown={()=> setClicked(true)}
					onMouseUp={()=> setClicked(false)}
					onTouchStart={()=> setClicked(true)}
					onTouchEnd={()=> setClicked(false)}
					
					onMouseLeave={()=> checkHover(false)}
				/>
			</div>
		</div>
	);
}

export default FrontPage;