function App ()
{
	const spacePhenomena = [
		{id: 1, name: "Asteroid Belt", emoji: "☄️"},
		{id: 2, name: "Galactic Nebula", emoji: "🌌"},
		{id: 3, name: "Black Hole", emoji: "🕳️"},
		{id: 4, name: "Supernova Explosion", emoji: "💥"},
		{id: 5, name: "Pulsar", emoji: "⚡"},
		{id: 6, name: "Quasar", emoji: "💫"},
		{id: 7, name: "Exoplanet", emoji: "🪐"},
		{id: 8, name: "Interstellar Cloud", emoji: "☁️"},
		{id: 9, name: "Gamma-Ray Burst", emoji: "🌠"},
		{id: 10, name: "Magnetic Field Reversal", emoji: "🧲"}
	];

	const observationStatuses = ["🔭 Visible", "🌫 Faint", "🚀 Prime for Study"];

	return (
		<div>
			<h1>Space Phenomena Tracker</h1>
			<ul> {
				spacePhenomena.map(spacePhenomena=>
					{
				const randomIndex= Math.floor(Math.random() *observationStatuses.length);

					const observationStatuses = observationStatuses[randomIndex];
				
					return (
						<li key= {spacePhenomena.id}> 
						{spacePhenomena.emoji}
						{spacePhenomena.name}
						{observationStatus}
						{randomIndex === 2 && <span>
							(Hear </span>}
						</li>
					)
			
			</ul>
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById("root"));
