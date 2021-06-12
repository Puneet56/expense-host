import ExpenseItem from "./ExpenseItem";

const Expenses = ({ data }) => {
	return (
		<>
			{data.map((expense) => (
				<ExpenseItem key={expense.id} data={expense} />
			))}
		</>
	);
};

export default Expenses;
