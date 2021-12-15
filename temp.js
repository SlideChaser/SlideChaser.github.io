<div className="testArea">
					<h1 className='backgroundColor'>The current time is: {theTime}</h1>
					{/* This is how we can choose what to show in jsx: */}
					{show
					? <p>{pokemon.name}</p>
					: <button onClick={()=>setShow(true)}>hello</button>}
				</div>

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