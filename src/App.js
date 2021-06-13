import AddExpense from "./components/AddExpense";
import Expenses from "./components/Expenses";

import { useState } from "react";
let data = [
	{
		id: 1,
		date: new Date().toLocaleDateString("en-IN"),
		amount: "100",
		note: "Dummy Data",
	},
	{
		id: 2,
		date: "20/06/2020",
		amount: "100",
		note: "Dummy Data2",
	},
	{
		id: 3,
		date: "20/06/2021",
		amount: "100",
		note: "Dummy Data2",
	},
	{
		id: 4,
		date: "20/06/2022",
		amount: "100",
		note: "Dummy Data2",
	},
	{
		id: 5,
		date: "20/06/2022",
		amount: "100",
		note: "Dummy Data2",
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
			//this can only be used inside setData, any variabble or as we used prevdata is assigned most recend state and then we modify the state by using the spread syntax on it.
		});
	};

	return (
		<>
			<AddExpense torecievedata={recieveData} />
			<Expenses data={newdata} />
		</>
	);
};

export default App;
