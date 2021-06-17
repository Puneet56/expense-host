import AddExpense from "./components/AddExpense";
import Expenses from "./components/Expenses";
import Login from "./pages/Login";
// import ExpenseFilter from "./components/ExpenseFilter";

import { useState } from "react";
let data = [
	{
		id: 1,
		date: "17/6/2021",
		amount: "100",
		note: "Dummy Data",
		type: "expense",
		category: "food",
	},
	{
		id: 2,
		date: "20/06/2020",
		amount: "100",
		note: "Dummy Data2",
		type: "income",
		category: "others",
	},
	{
		id: 3,
		date: "20/06/2021",
		amount: "100",
		note: "Dummy Data2",
		type: "income",
		category: "salary",
	},
	{
		id: 4,
		date: "20/06/2022",
		amount: "100",
		note: "Dummy Data2",
		type: "expense",
		category: "others",
	},
	{
		id: 5,
		date: "20/06/2022",
		amount: "100",
		note: "Dummy Data2",
		type: "expense",
		category: "travelling",
	},
	{
		id: 6,
		date: "20/06/2021",
		amount: "100",
		note: "Dummy Data2",
		type: "income",
		category: "salary",
	},
	{
		id: 7,
		date: "20/06/2022",
		amount: "100",
		note: "Dummy Data2",
		type: "expense",
		category: "investment",
	},
	{
		id: 8,
		date: "20/06/2022",
		amount: "100",
		note: "Dummy Data2",
		type: "expense",
		category: "shopping",
	},
];

const App = () => {
	const [newdata, setData] = useState(data);
	//we need to use state as we are changing data array
	let recieveData = (dataFromAddExpense) => {
		// this function is recieving data from addexpense using props.
		// this function is saved in torecievedata props method in the return statement below.
		setData((prevdata) => {
			return [dataFromAddExpense, ...prevdata];
			//this can only be used inside setData, any variable or as we used prevdata is assigned most recend state and then we modify the state by using the spread syntax on it.
		});
	};

	return (
		<>
			<Login />
			{/* <AddExpense torecievedata={recieveData} />
			<Expenses data={newdata} /> */}
		</>
	);
};

export default App;
