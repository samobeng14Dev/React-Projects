import { useState } from "react";
import data from "./data";
import Questions from "./Questions";

//   The id parameter of the toggleQuestion function is used to identify which question is being clicked.
// The activeId state variable keeps track of the currently expanded question.
// When a button is clicked, the toggleQuestion function checks if the clicked question's id matches the activeId.
// If it matches, the question is collapsed(activeId set to null), and if it doesn't match, the question is expanded (activeId set to the clicked question's id).

function App() {
	const [questions, setQuestions] = useState(data);
	const [activeId, setActiveId] = useState(null);

	const toggleQuestion = (id) => {
		// console.log(id);
		const newActiveId = id === activeId ? null : id;
		setActiveId(newActiveId);
	};

	return (
		<main>
			<Questions
				questions={questions}
				activeId={activeId}
				toggleQuestion={toggleQuestion}
			/>
		</main>
	);
}

export default App;
