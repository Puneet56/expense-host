import "./Sum.css";
const ExpensesSum = (props) => {
	let income = 0;
	let expenses = 0;

	for (let d of props.data) {
		if (d.type === "expense") {
			expenses += Number(d.amount);
		} else {
			income += Number(d.amount);
		}
	}

	return (
		<div className="sum-div">
			<div className="expense-sum">Expenses: {expenses}</div>
			<div className="balance">Balance: {income - expenses}</div>
			<div className="income-sum">Income: {income}</div>
		</div>
	);
};

export default ExpensesSum;
