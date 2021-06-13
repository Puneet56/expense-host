import ExpenseItem from "./ExpenseItem";
// import ExpenseFilter from "./ExpenseFilter";

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
