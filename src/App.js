import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AddExpense from './components/AddExpense';
import Expenses from './components/Expenses';
import Login from './pages/Login';
import Signup from './pages/Signup';
// import ExpenseFilter from "./components/ExpenseFilter";

import { useState } from 'react';
let data = [];
let _holder = [];
let loaded = false;
fetch(
	'https://expense-host-default-rtdb.asia-southeast1.firebasedatabase.app/data.json'
).then((res) => {
	res.json().then((r) => {
		for (let key in r) {
			_holder.push(r[key]);
		}
	});
});

console.log(data);

const App = () => {
	const [isloggedin, setlogin] = useState(false);
	const [userid, setuserid] = useState('');

	const [newdata, setData] = useState(data);

	useEffect(
		() => {
			setTimeout(() => {
				setData(_holder);
			}, 1000);
			loaded = !loaded;
			console.log(loaded);
		},

		//this code sets the data after fetching from database
		[]
	);

	//we need to use state as we are changing data array
	let recieveData = (dataFromAddExpense) => {
		// this function is recieving data from addexpense using props.
		// this function is saved in torecievedata props method in the return statement below.
		setData((prevdata) => {
			return [dataFromAddExpense, ...prevdata];
			//this can only be used inside setData, any variable or as we used prevdata is assigned most recend state and then we modify the state by using the spread syntax on it.
		});
	};

	let getLoginData = (d) => {
		setuserid(d);
		if (d.length !== 0) {
			setlogin(true);
		}
	};

	return (
		<>
			<Router>
				<Switch>
					{isloggedin && (
						<Route path='/'>
							<AddExpense
								torecievedata={recieveData}
								data={newdata}
								userid={userid}
							/>
							<Expenses data={newdata} loaded={loaded} userid={userid} />
						</Route>
					)}
					<Route path='/login'>
						<Login getLoginData={getLoginData} />
					</Route>
					<Route path='/signup'>
						<Signup getLoginData={getLoginData} />
					</Route>
					<Route path='/'>
						<Login getLoginData={getLoginData} />
					</Route>
				</Switch>
			</Router>
		</>
	);
};

export default App;
