import { useState } from "react";
import "./AddExpense.css";

const AddExpense = ({ torecievedata }) => {
	//cancel button functionality
	let [isEditing, setEditing] = useState(false);

	// for default date
	let [enteredDate, setDate] = useState(new Date());
	let [enteredAmount, setAmount] = useState("");
	let [enteredNote, setNote] = useState("");
	let [enteredType, setType] = useState("expense");
	//states for all input variables

	const dateHandler = (event) => {
		//event object is recieved from browser when onChange is executed
		setDate(new Date(event.target.valueAsNumber).toLocaleDateString("en-IN"));
	};
	const amountHandler = (event) => {
		setAmount(event.target.value);
	};
	const noteHandler = (event) => {
		setNote(event.target.value);
	};
	const typechangehandler = (event) => {
		setType(event.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault(); //to prevent reload on clicking submit
		if (enteredDate === "") {
			enteredDate = new Date().toLocaleDateString("en-IN");
		}

		const expenseData = {
			id: Math.random(),
			date: enteredDate,
			amount: enteredAmount,
			note: enteredNote,
			type: enteredType,
		};
		// all the entered data is stored in this expensedata object and is beings sent to parent App component by prop having torecievedata method which is defined in App component.
		console.log(expenseData);
		torecievedata(expenseData);
		//data sent to parent
		setDate("");
		setAmount("");
		setNote("");
		//on submitting all the fields are set to empty string after saving the data in expensedata object.
	};
	const changeEditing = (event) => {
		event.preventDefault();
		setEditing((isEditing) => {
			return (isEditing = !isEditing);
		});
	};
	return (
		<div className="add-expense">
			{
				//if isEditing is false only Add Expense Button is Shown
				!isEditing && (
					<form className="add-expense__form">
						<button className="add-expense__submit" onClick={changeEditing}>
							Add Expense
						</button>
					</form>
				)
			}
			{
				//if isEditing is true full form is shown with cancel button to change is edititng back to false
				isEditing && (
					<form onSubmit={submitHandler} className="add-expense__form">
						<input
							type="date"
							className="add-expense__date"
							name=""
							id=""
							required
							defaultValue={new Date().toISOString().slice(0, 10)}
							//default value is date so no need to change value on submit.
							onChange={dateHandler}
						/>
						<input
							className="add-expense__amount"
							type="number"
							name="amount"
							id=""
							value={enteredAmount}
							//value is set as the entered amount and recievd at submit.
							//then the value is reset to empty for both amount and note field.
							required
							placeholder="Amount"
							onChange={amountHandler}
						/>
						<select
							className="add-expense__type"
							onChange={typechangehandler}
							value={enteredType}
						>
							<option value="expense">Expense</option>
							<option value="income">Income</option>
						</select>
						<input
							className="add-expense__note"
							type="text"
							placeholder="Note"
							value={enteredNote}
							onChange={noteHandler}
						/>
						<button className="add-expense__submit" type="submit">
							Add Expense
						</button>
						{/*is editing back to false*/}
						<button className="add-expense__cancel" onClick={changeEditing}>
							Cancel
						</button>
					</form>
				)
			}
		</div>
	);
};

export default AddExpense;
