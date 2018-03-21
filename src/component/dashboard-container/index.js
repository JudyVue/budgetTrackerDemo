import './_dashboard-container.scss';
import React from 'react';
import uuid from 'uuid/v1';

import ExpenseCreateForm from './../expense-create-form/index';

import ExpensesList from './../expenses-list/index';
export default class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.expenseCreate = this.expenseCreate.bind(this);
  }

  expenseCreate(expense) {
    expense.id = uuid();
    this.props.app.setState(prevState => {
      return {
        expenses: [...prevState.expenses, expense],
        budget: prevState.budget - expense.price,
      };
    })
  }

  render() {
    console.log(this.props.app.state)
    return (
      <div className="dashboard-container">
        <ExpenseCreateForm 
          handleExpenseCreate={this.expenseCreate}
        />
        <ExpensesList 
          expenses={this.props.app.state.expenses}
        />
      </div>
    )
  }
}