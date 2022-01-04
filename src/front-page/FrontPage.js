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
	const [vine, setVine] = useState(false);

	const {size} = useSpring({
		size: clicked ? 200 : 100,
		from: {
			size: 200
		},
		config: {duration: clicked ? 1000 : 100}
	});

	const [ballStyles, setBallOp] = useSpring(()=>({opacity: .5}));
	const [vineStyles, setVineOp] = useSpring(()=>({opacity: 0}));

	useEffect((setVine = setVineOp)=>{
		vine ? setVine({opacity: 1}) : setVine({opacity: 0});
	}, [vine])

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

				<path fill='#0a1' d='M 1282.804 226.668 C 1277.18 237.4473 1277.059 239.949 1275.306 250.101 C 1277.132 245.328 1280.669 243.486 1282.216 239.728 Z'/>
				<path fill='#0a1' d='M 1291.425 301.045 C 1292.051 310.931 1292.7677 316.8857 1295.054 323.57 C 1295.179 317.814 1294.428 312.808 1294.679 308.428 Z'/>
				<path fill='#0a1' d='M 1315.611 303.629 C 1319.219 305.357 1322.758 306.611 1326.519 310.298 C 1321.874 308.233 1320.177 308.9707 1317.006 308.307 Z'/>
				<path fill='#0a1' d='M 1351.514 365.677 C 1358.081 369.278 1363.39 377.537 1369.62 382.483 C 1362.137 377.684 1358.818 378.201 1353.066 374.587 Z'/>
				<path fill='#0a1' d='M 1312.858 343.736 C 1313.996 351.839 1312.459 358.563 1315.625 365.868 C 1315.629 357.987 1317.07 352.703 1317.935 348.092 Z'/>
				<path fill='#0a1' d='M 1343.385 400.624 C 1344.363 406.819 1343.548 413.178 1340.94 417.58 C 1344.853 416.275 1346.809 412.363 1347.298 408.613 Z'/>
				<path fill='#0a1' d='M 1366.288 430.914 C 1370.299 435.307 1370.683 442.703 1373.934 445.994 C 1368.762 444.721 1366.964 441.4947 1363.479 439.245 Z'/>
				<path fill='#0a1' d='M 1300 170 C 1274.682 231.832 1264.218 278.672 1333.334 377.925 C 1345.299 401.898 1349.735 419.924 1350 449.054 L 1350 482.066 C 1373.258 437.249 1373.421 409.893 1350 357.873 C 1319.624 312.662 1302.171 282.194 1300 252.502 C 1300.098 241.433 1300 240.104 1300 235.933 Z'/>

				<path onClick={()=>setVine(!vine)} fill='#141' d='M 1300 170 C 1274.682 231.832 1264.218 278.672 1333.334 377.925 C 1345.299 401.898 1349.735 419.924 1350 449.054 L 1350 482.066 C 1373.258 437.249 1373.421 409.893 1350 357.873 C 1319.624 312.662 1302.171 282.194 1300 252.502 C 1300.098 241.433 1300 240.104 1300 235.933 Z'/>
				
				<animated.path style={vineStyles} fill='#0a0' d='M 1285.144 506.358 C 1273.5357 511.246 1261.9273 516.134 1250.649 532.243 C 1263.089 529.479 1270.83 520.079 1283.922 525.909 Z'/>
				<animated.path style={vineStyles} fill='#0a0' d='M 1305.049 574.404 C 1306.456 595.511 1316.3057 600.0453 1321.934 612.866 C 1321.7777 602.547 1316.948 590.543 1321.465 581.909 Z'/>
				<animated.path style={vineStyles} fill='#0a0' d='M 1359.712 560.691 C 1372.828 552.316 1392.051 548.895 1416.584 554.212 C 1395.473 559.975 1382.274 560.627 1379.183 573.499 Z'/>
				<animated.path style={vineStyles} fill='#0a0' d='M 1407.013 631.331 C 1408.148 647.439 1415.7723 657.921 1424.117 674.162 C 1419.909 663.646 1414.992 642.876 1424.117 642.876 Z'/>
				<animated.path style={vineStyles} fill='#0a0' d='M 1500.472 696.236 C 1518.765 697.643 1534.8687 710.3073 1552.067 717.343 C 1534.032 719.247 1520.239 710.759 1508.915 716.874 Z'/>

				<animated.path style={vineStyles} onClick={()=>{
					
				}} fill='#151' d='M 1300.046 479.632 C 1288.385 489.597 1285.394 494.309 1276.142 513 C 1269.107 528.294 1272.828 554.702 1299.617 574.31 C 1347.9483 609.872 1411.335 611.164 1444.611 680.996 C 1477.335 740.921 1530.1303 769.018 1572.89 813.029 C 1554.549 752.939 1503.006 714.984 1490.355 661.567 C 1465.303 570.837 1344.695 560.878 1318.194 540.317 C 1309.846 535.042 1300.689 537.72 1300 523.225'/>
			</svg>

			<div className="fuzzyBallTest">
				<animated.div
					className="fuzzyBall hoverOp1"

					style={{height: size, width: size, opacity: ballStyles.opacity}}
					
					onMouseDown={()=> setClicked(true)}
					onMouseUp={()=> setClicked(false)}
					onTouchStart={()=> setClicked(true)}
					onTouchEnd={()=> setClicked(false)}
					
					onMouseEnter={()=> setBallOp({opacity: 1})}
					onMouseLeave={()=>{
						checkHover(false);
						setBallOp({opacity: .5});
					}}
				/>
			</div>
		</div>
	);
}

export default FrontPage;