// import { useState } from "react";
// import data from "./data";
// import Questions from "./Questions";

// //   The id parameter of the toggleQuestion function is used to identify which question is being clicked.
// // The activeId state variable keeps track of the currently expanded question.
// // When a button is clicked, the toggleQuestion function checks if the clicked question's id matches the activeId.
// // If it matches, the question is collapsed(activeId set to null), and if it doesn't match, the question is expanded (activeId set to the clicked question's id).

// function App() {
// 	const [questions, setQuestions] = useState(data);
// 	const [activeId, setActiveId] = useState(null);

// 	const toggleQuestion = (id) => {
// 		// console.log(id);
// 		const newActiveId = id === activeId ? null : id;
// 		setActiveId(newActiveId);
// 	};

// 	return (
// 		<main>
// 			<Questions
// 				questions={questions}
// 				activeId={activeId}
// 				toggleQuestion={toggleQuestion}
// 			/>
// 		</main>
// 	);
// }

// export default App;

import { useState } from "react";
import data from "./data";
import Questions from "./Questions";

function App() {
	const [questions] = useState(data);
	const [activeId, setActiveId] = useState(null);
	const [currentPage, setCurrentPage] = useState(1);
	const questionsPerPage = 2; // Display 2 questions per page

	const toggleQuestion = (id) => {
		setActiveId(id === activeId ? null : id);
	};

	// Pagination logic
	const totalPages = Math.ceil(questions.length / questionsPerPage);
	const startIndex = (currentPage - 1) * questionsPerPage;
	const currentQuestions = questions.slice(
		startIndex,
		startIndex + questionsPerPage
	);

	const goToPage = (page) => {
		if (page >= 1 && page <= totalPages) {
			setCurrentPage(page);
			setActiveId(null); // Close any open question on page change
		}
	};

	return (
		<main className='container'>
			{/*  Accordion questions */}
			<Questions
				questions={currentQuestions}
				activeId={activeId}
				toggleQuestion={toggleQuestion}
			/>

			{/* Pagination BELOW the accordion */}
			<div className='pagination'>
				<button
					onClick={() => goToPage(currentPage - 1)}
					disabled={currentPage === 1}>
					Prev
				</button>

				{[...Array(totalPages)].map((_, index) => (
					<button
						key={index + 1}
						onClick={() => goToPage(index + 1)}
						className={currentPage === index + 1 ? "active" : ""}>
						{index + 1}
					</button>
				))}

				<button
					onClick={() => goToPage(currentPage + 1)}
					disabled={currentPage === totalPages}>
					Next
				</button>
			</div>
		</main>
	);
}

export default App;

