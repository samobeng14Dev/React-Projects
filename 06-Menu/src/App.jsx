import Title from "./Title";
import menu from "./data";
import Menu from "./Menu";
import Categories from "./Categories";
import { useState } from "react";

//const temCategories = menu.map((item) => item.category);
// const tempSet = new Set(temCategories);
// const tempItems = ["all", ...tempSet];

const allCategories = ["all", ...new Set(menu.map((item) => item.category))];
const App = () => {
	const [menuItems, setMenuItems] = useState(menu);
	const [categories, setCategories] = useState(allCategories);
	const filterItems = (category) => {
		if (category === "all") {
			setMenuItems(menu);
			return;
		}
		const newItems = menu.filter((item) => item.category === category);
		setMenuItems(newItems);
	};
	return (
		<main>
			<section className='menu'>
				<Title text='our menu' />
				<Categories
					categories={categories}
					filterItems={filterItems}
				/>
				<Menu items={menuItems} />
			</section>
		</main>
	);
};
export default App;
