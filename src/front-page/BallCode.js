import React, {useState} from 'react';
import {animated, useSpring} from 'react-spring';

import '../css/components/grid-system/_frontGrid.scss';

function BallCode(){
	const [clicked, setClicked] = useState(false);
	const [hover, setHover] = useState(false);

	const {size} = useSpring({
		size: clicked ? 200 : 100,
		from: {
			size: 200
		},
		config: {duration: clicked ? 1000 : 100}
	});

	const [ballStyles, setBallOp] = useSpring(()=>({opacity: .5}));

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

export default BallCode;