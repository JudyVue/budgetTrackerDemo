import './_expense-create.scss';
import React from 'react';


export default class ExpenseCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      price: 0,
    };

    console.log(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidUpdate() {
  //   console.log(this.state, 'STATE IN EXPENSE CREATE FORM')
  // }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleExpenseCreate(this.state);
  }

  render() {
    return (
      <form 
        onSubmit={this.handleSubmit}
        className="expense-create-form"
        >
        <section>
          <label htmlFor="title">Title of Expense</label>
          <input 
            name="title"
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </section>
        <section className="price-section">
          <label htmlFor="price">Price of Expense</label>
          <input 
            name="price"
            type="number"
            value={this.state.price}
            onChange={this.handleChange}
          />
        </section>
        <button type="submit">
          Add
        </button>
      </form>
    )
  }
}