// needs work

import { useState } from "react";
import "./ExpenseFilter.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseFilter = ({ data }) => {
	let [f, setYear] = useState(data);

	const filterArray = (event) => {
		f = data.filter((d) => {
			let _f = d.date.slice(-4);
			return _f === event.target.value;
		});
		setYear(f);
	};

	return (
		<>
			<form className="filter-form">
				<label className="filter-form__label" htmlFor="y">
					Select Year:
				</label>
				<select
					defaultValue="Select"
					className="filter-form__year"
					id="y"
					name="y"
					onChange={filterArray}
				>
					<option value="Select">Select</option>
					<option value="2020">2020</option>
					<option value="2021">2021</option>
					<option value="2022">2022</option>
					<option value="2023">2023</option>
				</select>
			</form>
			{f.map((expense) => (
				<ExpenseItem key={expense.id} data={expense} />
			))}
		</>
	);
};

export default ExpenseFilter;
