import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, Brush, Legend,
  ReferenceArea, ReferenceLine, ReferenceDot, ResponsiveContainer,
  LabelList, Label } from 'recharts';
import LoadingIcon from '../../../Components/LoadingIcon';

class LastMonth extends Component {


	render() {

		/* ---- LOADING INFO ---- */
    if (this.props.currentUser.paymethods === undefined || this.props.currentUser.categories === undefined) {
      return(
        <LoadingIcon />
      );
    }

		/* ---- EXTRA VARIABLES ---- */
    const currentDate = new Date();
    const lastMonth = currentDate.getMonth();

    // non fixed categories names
    let categories = {};
    const categoriesArray = this.props.currentUser.categories;
    for (let i=0; i<categoriesArray.length; i++) {
      if (categoriesArray[i].fixed === false) {
        categories[categoriesArray[i].id] = categoriesArray[i].name;
      }
    }

    // sum of last month expenses per category
    const currentMonthExpenses = {};
    const allExpenses = this.props.expenses;
    for (let i=0; i<allExpenses.length; i++) {
    	const date = allExpenses[i].expenseDate.split("");
    	const expenseMonth = parseInt(date[5]+date[6]);
      if (allExpenses[i].category.id in categories 
      		&& allExpenses[i].category.id in currentMonthExpenses 
      		&& expenseMonth === lastMonth) {
        currentMonthExpenses[allExpenses[i].category.id] += allExpenses[i].total;
      } else if (allExpenses[i].category.id in categories 
      					&& expenseMonth === lastMonth) {
      	currentMonthExpenses[allExpenses[i].category.id] = allExpenses[i].total;
      }
    }

    // data array to render chart
		const data = [];
		for (let key in currentMonthExpenses) {
			let newData = { name: '', value: ''};
			newData.name = categories[key];
			newData.value = currentMonthExpenses[key];
			data.push(newData);
		}

		// data array format (example)
		// const data2 = [
		// 	{ name: 'groceries', value: 100 },
		// 	{ name: 'pharmacy', value: 75 },
		// 	{ name: 'leisure', value: 560 },
		// ];

		return(
			<LineChart width={500} height={250} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
  			<Line type="monotone" dataKey="value" stroke="#8884d8" />
			  <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
			  <XAxis dataKey="name" />
			  <YAxis dataKey="value" />
			  <Tooltip />
			</LineChart>
			
		);
	}
	
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(LastMonth);	