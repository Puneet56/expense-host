import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import "./Expenses.css";

const Expenses = ({ data }) => {
	const [filteredYear, setYear] = useState("Select");

	let newArray = data.filter((year) => {
		let _years = year.date.slice(-4);
		if (filteredYear === "Select") {
			return year;
		} else {
			return _years === filteredYear;
		}
	}); //Filtering array on basis of year.

	const filterhandler = (selectedYear) => {
		setYear(selectedYear);
	}; //this function gets the value from ExpensesFilter component, it is assigned as year in ExpenseFilter.

	return (
		<>
			<ExpenseFilter data={data} year={filterhandler} />
			<div>
				{newArray.map((expense) => (
					<ExpenseItem key={expense.id} data={expense} />
				))}
			</div>
		</>
	);
};

export default Expenses;
