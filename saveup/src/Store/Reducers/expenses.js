const initialState = [
				{ id: 1, category_id: 1, text: "Blouses", store: "H&M", expenseDate: "2017-06-14T06:36:03.635Z", total: 50, payMethod: { id: 1, name: "MasterCard" }},
				{ id: 2, category_id: 1, text: "Pants", store: "H&M", expenseDate: "2017-01-14T06:36:03.635Z", total: 150, payMethod: { id: 2, name: "cash" }},
				{ id: 3, category_id: 1, text: "T-Shirts", store: "H&M", expenseDate: "2017-06-14T06:36:03.635Z", total: 20.50, payMethod: { id: 1, name: "MasterCard" }},
				{ id: 4, category_id: 1, text: "Blouses", store: "H&M", expenseDate: "2017-01-01T06:36:03.635Z", total: 30.90, payMethod: { id: 1, name: "MasterCard" }},
				{ id: 5, category_id: 2,text: "Weekly Groceries", store: "Migros", expenseDate: "2017-04-14T06:36:03.635Z", total: 45.75, payMethod: { id: 1, name: "MasterCard" }},
				{ id: 6, category_id: 2, text: "Weekly Groceries", store: "Migros", expenseDate: "2017-02-14T06:36:03.635Z", total: 42.10, payMethod: { id: 2, name: "cash" }},
				{ id: 7, category_id: 2, text: "Weekly Groceriess", store: "COOP", expenseDate: "2017-03-14T06:36:03.635Z", total: 20, payMethod: { id: 1, name: "MasterCard" }},
				{ id: 8, category_id: 2, text: "", store: "Denner", expenseDate: "2017-06-14T06:36:03.635Z", total: 30, payMethod: { id: 1, name: "MasterCard" }},
];

const expenses = (state=initialState, action) => {
	return state;
}

export default expenses;