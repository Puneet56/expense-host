import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import ExpensesSum from './Sum';
import { useState } from 'react';
import './Expenses.css';

const Expenses = ({ data, loaded, userid }) => {
	const [filteredYear, setYear] = useState('all');

	let userarray = data.filter((user) => {
		let _user = user.userid;
		return _user === userid;
	});

	let newArray = userarray.filter((year) => {
		let _years = year.date.slice(-4);
		if (filteredYear === 'all') {
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
				<ExpensesSum data={newArray} />
				{newArray.map((expense) => (
					<ExpenseItem key={expense.id} data={expense} />
				))}
				{!loaded && <div className='no-data'>Loading ...</div>}
				{newArray.length === 0 && loaded && (
					<div className='no-data'>No Data</div>
				)}
			</div>
		</>
	);
};

export default Expenses;
