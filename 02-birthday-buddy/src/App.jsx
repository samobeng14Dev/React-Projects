import { useState } from "react";
import data from "./data";
import List from "./List";
import Person from "./Person";
const App = () => {
	const [people, setPeople] = useState(data);
	return (
		<main>
			<section className='container'>
				<h3>{people.length} birthday today</h3>
				<List people={people} />
				<button
					type='button'
					className='btn btn-block'
					onClick={() => setPeople([])}>
					Clear All
				</button>
			</section>
		</main>
	);
};
export default App;
