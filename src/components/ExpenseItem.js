import "./ExpenseItem.css";

const ExpenseItem = (props) => {
	// const [date, setDate] = useState(new Date());
	// let [day, month, year, hours, minutes, seconds] = [
	// 	date.getDate(),
	// 	date.getMonth(),
	// 	date.getFullYear(),
	// 	date.getHours(),
	// 	date.getMinutes(),
	// 	date.getSeconds(),
	// ];

	let cat = props.data.category.slice(0, 1);

	return (
		<div className={props.data.type}>
			<div className="expense-item__cat-icon">{cat}</div>
			<div className="expense-item__price-div">
				<p className="expense-item__price">₹{props.data.amount}</p>
				<p className="expense-item__note">{props.data.note}</p>
			</div>
			<div className="expense-item__time-div">
				<div className="expense-item__props">{props.data.date}</div>
			</div>
		</div>
	);
};

export default ExpenseItem;
