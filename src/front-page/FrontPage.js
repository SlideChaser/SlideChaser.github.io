import React, {useState, useEffect} from 'react';

import {animated, useSpring} from 'react-spring';

import '../css/components/grid-system/_frontGrid.scss';

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
						set({opacity: .5})
					}}
				/>
			</div>
		</div>
	);
}

export default FrontPage;