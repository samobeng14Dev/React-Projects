import Person from "./Person";

function List({ people }) {
	return (
		<section>
			{people.map((person) => {
				const { id } = person;
				return (
					<Person
						key={id}
						{...person}
					/>
				);
			})}
		</section>
	);
}

export default List;
