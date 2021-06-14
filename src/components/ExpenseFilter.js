// needs work

import "./ExpenseFilter.css";

const ExpenseFilter = ({ data, year }) => {
	const filterArray = (event) => {
		year(event.target.value);
		//sending year to Expenses
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
		</>
	);
};

export default ExpenseFilter;
