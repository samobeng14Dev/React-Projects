import Questions from "./Questions";
import { useState } from "react";
import data from "./data";
const App = () => {
	const [questions, setQuestions] = useState(data);

	return (
		<main>
			<Questions questions={questions} />
		</main>
	);
};
export default App;
