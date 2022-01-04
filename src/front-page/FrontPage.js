import React, {useState, useEffect} from 'react';

import {animated, useSpring} from 'react-spring';

import '../css/components/grid-system/_frontGrid.scss';

// The SVG paths for the tron tendrils
const paths = {
	path1:`
		M 150,-2000
		L 150,200 L 250,350 L 250,600 L 200,700
		L 200,3000 L 250,3000
		L 250,710 L 300,610 L 300,340 L 200,190
		L 200,-2000 Z
	`,
	path2:`
		M 700,-2000
		L 700,100 L 650,150 L 650,350 L 600,400
		L 600,3000 L 650,3000
		L 650,420 L 700,375 L 700,160 L 750,110
		L 750,-2000 Z
	`,
	path3:`
		M 1200,-2000
		L 1200,50 L 1300,150 L 1300,700 L 1200,800 L 1200,930
		L 1250,1000 L 1250,3000 L 1300,3000 L 1300,1000
		L 1250,930 L 1250,810 L 1350,710 L 1350,140 L 1250,40
		L 1250,-2000 Z
	`,
	path4:`
		M 1700,-2000
		L 1700,80 L 1650,130 L 1650,500 L 1600,550 L 1600,650 L 1800,800
		L 1800,3000 L 1850,3000
		L 1850,790 L 1650,640 L 1650,560 L 1700,510 L 1700,140 L 1750,90
		L 1750,-2000 Z
	`
};

// This functional component allows for multiple spring hover animations.
function SVGHoverPath(props){
	const [{opacity}, set] = useSpring(()=>({opacity: .5}));

	return(
			<animated.path
				style={{opacity: opacity}}
				onMouseEnter={()=> set({opacity: 1})}
				onMouseLeave={()=> set({opacity: .5})}
				fill='#fff'
				d={props.path}
			/>
	);
}

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

	const [{opacity}, set] = useSpring(()=>({opacity: .5}));

	function checkHover(prev){
		setHover(prev ? true : false);
		// setter debug:
		// console.log(hover);
		setTimeout(()=>{
			hover ? setClicked(true) : setClicked(false);
		}, 250);
	}

	return(
		<div className='frontGrid'>
			<svg className='svgBack' xmlns="http://www.w3.org/2000/svg" viewBox='0 0 2000 1000'>
				<path className='svgGlow' fill='#000' d={paths.path1}/>
				<path className='svgGlow' fill='#000' d={paths.path2}/>
				<path className='svgGlow' fill='#000' d={paths.path3}/>
				<path className='svgGlow' fill='#000' d={paths.path4}/>
				<SVGHoverPath path={paths.path1}/>
				<SVGHoverPath path={paths.path2}/>
				<SVGHoverPath path={paths.path3}/>
				<SVGHoverPath path={paths.path4}/>
				<path fill='#0a1' d='M 1300 170 C 1274.682 231.832 1264.218 278.672 1333.334 377.925 C 1345.299 401.898 1349.735 419.924 1350 449.054 L 1350 482.066 C 1373.258 437.249 1373.421 409.893 1350 357.873 C 1319.624 312.662 1302.171 282.194 1300 252.502 C 1300.098 241.433 1300 240.104 1300 235.933 Z'/>
				<path fill='#0a1' d='M 1300 170 C 1274.682 231.832 1264.218 278.672 1333.334 377.925 C 1345.299 401.898 1349.735 419.924 1350 449.054 L 1350 482.066 C 1373.258 437.249 1373.421 409.893 1350 357.873 C 1319.624 312.662 1302.171 282.194 1300 252.502 C 1300.098 241.433 1300 240.104 1300 235.933 Z M 1300.046 479.632 C 1288.385 489.597 1285.394 494.309 1276.142 513 C 1269.107 528.294 1272.828 554.702 1299.617 574.31 C 1347.9483 609.872 1411.335 611.164 1444.611 680.996 C 1477.335 740.921 1530.1303 769.018 1572.89 813.029 C 1554.549 752.939 1503.006 714.984 1490.355 661.567 C 1465.303 570.837 1344.695 560.878 1318.194 540.317 C 1309.846 535.042 1300.689 537.72 1300 523.225'/>
			</svg>

			<div className="fuzzyBallTest">
				<animated.div
					className="fuzzyBall hoverOp1"

					style={{height: size, width: size, opacity: opacity}}
					
					onMouseDown={()=> setClicked(true)}
					onMouseUp={()=> setClicked(false)}
					onTouchStart={()=> setClicked(true)}
					onTouchEnd={()=> setClicked(false)}
					
					onMouseEnter={()=> set({opacity: 1})}
					onMouseLeave={()=>{
						checkHover(false);
						set({opacity: .5});
					}}
				/>
			</div>
		</div>
	);
}

export default FrontPage;