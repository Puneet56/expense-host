import "./ExpenseFilter.css";

const ExpenseFilter = ({ data }) => {
	let f;

	const filterArray = (event) => {
		f = data.filter((d) =>
			d.date.slice(5, 9) === event.target.value ? true : false
		);
		console.log(f);
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
