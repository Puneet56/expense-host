import { useState } from "react";
import "./AddExpense.css";

const AddExpense = ({ torecievedata }) => {
	// for default date

	let [enteredDate, setDate] = useState("");
	let [enteredAmount, setAmount] = useState("");
	let [enteredNote, setNote] = useState("");

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

	const submitHandler = (event) => {
		event.preventDefault(); //to prevent reload on clicking submit
		if (enteredDate === "") {
			enteredDate = new Date().toLocaleDateString("en-IN");
			console.log(enteredDate);
		}

		const expenseData = {
			id: Math.random(),
			date: enteredDate,
			amount: enteredAmount,
			note: enteredNote,
		};
		// all the entered data is stored in this expensedata object and is beings sent to parent App component by prop having torecievedata method which is defined in App component.

		torecievedata(expenseData);
		//data sent to parent
		setDate("");
		setAmount("");
		setNote("");
		//on submitting all the fields are set to empty string after saving the data in expensedata object.
	};

	return (
		<div className="add-expense">
			<form onSubmit={submitHandler} className="add-expense__form">
				{/*{category input to be added} */}
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
			</form>
		</div>
	);
};

export default AddExpense;
