// import Questions from "./Questions";
// import { useState } from "react";
// import data from "./data";
// const App = () => {
// 	const [questions, setQuestions] = useState(data);

// 	return (
// 		<main>
// 			<Questions questions={questions} />
// 		</main>
// 	);
// };
// export default App;

import Questions from "./Questions";
import { useState } from "react";
import data from "./data";

const App = () => {
	const [questions] = useState(data);
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 2; // Number of questions per page

	// Calculate total pages
	const totalPages = Math.ceil(questions.length / itemsPerPage);

	// Get questions for the current page
	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentQuestions = questions.slice(indexOfFirstItem, indexOfLastItem);

	// Pagination controls
	const goToPage = (page) => {
		if (page >= 1 && page <= totalPages) {
			setCurrentPage(page);
		}
	};

	return (
		<main className='app-container'>
			{/* Questions Accordion */}
			<Questions questions={currentQuestions} />

			{/* Pagination Section (Ensures buttons stay below accordion) */}
			<div className='pagination-container'>
				<button
					onClick={() => goToPage(currentPage - 1)}
					disabled={currentPage === 1}>
					Prev
				</button>

				{[...Array(totalPages)].map((_, index) => (
					<button
						key={index}
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
};

export default App;
