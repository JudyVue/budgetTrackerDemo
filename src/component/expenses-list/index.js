import React from 'react';


export default class ExpensesList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props.expenses)
    // debugger
    return (
      <ul>
        {this.props.expenses.length !==0 && this.props.expenses.map((item, i) => <li key={item.id}>{item.title}: ${item.price}</li>)}
      </ul>
    )
  }
}