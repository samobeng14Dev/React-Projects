import React from "react";
import SingleTour from "./SingleTour";

function Tours({ tours, removeTour }) {
	return (
		<section>
			<div className='title'>
				<h2>our tours</h2>
				<div className='title-underline'></div>
				<div className='tours'>
					{tours.map((tour) => {
						return (
							<SingleTour
								key={tour.id}
								{...tour}
								removeTour={removeTour}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default Tours;
