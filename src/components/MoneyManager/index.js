import {Component} from 'react'
import './index.css'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import {v4 as uuidv4} from 'uuid'
const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    transactions: [],
    titleInput: '',
    amountInput: '',
    typeInput: transactionTypeOptions[0].optionId,
  }

  getTotalIncome = () => {
    const {transactions} = this.state
    const incomeTransaction = transactions.filter(
      eachTransaction =>
        eachTransaction.type === transactionTypeOptions[0].displayText,
    )
    return incomeTransaction.length === 0
      ? 0
      : incomeTransaction.reduce(
          (acc, eachTransaction) => acc + eachTransaction.amount,
          0,
        )
  }

  getTotalExpense = () => {
    const {transactions} = this.state
    const expenseTransaction = transactions.filter(
      eachTransaction =>
        eachTransaction.type === transactionTypeOptions[1].displayText,
    )
    return expenseTransaction.length === 0
      ? 0
      : expenseTransaction.reduce(
          (acc, eachTransaction) => acc + eachTransaction.amount,
          0,
        )
  }

  getBalance = () => this.getTotalIncome() - this.getTotalExpense()

  addTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, typeInput} = this.state
    const typeOption = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === typeInput,
    )
    const {displayText} = typeOption
    const newTransaction = {
      id: uuidv4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }
    this.setState(prevState => ({
      transactions: [...prevState.transactions, newTransaction],
      titleInput: '',
      amountInput: '',
      typeInput: transactionTypeOptions[0].optionId,
    }))
  }

  changeInput = event => {
    this.setState({titleInput: event.target.value})
  }

  changeAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  changeType = event => {
    this.setState({typeInput: event.target.value})
  }

  deleteTransaction = id => {
    this.setState(prevState => ({
      transactions: prevState.transactions.filter(
        eachTransaction => eachTransaction.id !== id,
      ),
    }))
  }

  render() {
    const {transactions, titleInput, amountInput, typeInput} = this.state

    return (
      <div className="transactions-app-main-bg-container">
        <div className="transactions-app-title-container">
          <h1 className="transactions-app-greeting"> Hi, Goutam </h1>
          <p className="transactions-app-greeting-details">
            Welcome back to your
            <span className="money-manager"> Money Manager </span>
          </p>
        </div>

        <div className="amount-container">
          <MoneyDetails
            balance={this.getBalance}
            income={this.getTotalIncome}
            expense={this.getTotalExpense}
          />
        </div>

        <div className="transactions-and-history-container">
          <form
            className="transactions-outer-container transaction-container"
            onSubmit={this.addTransaction}
          >
            <h1 className="transactions-title"> Add Transaction </h1>
            <div className="input-container">
              <label htmlFor="title-input" className="title-description">
                TITLE
              </label>
              <input
                id="title-input"
                placeholder="TITLE"
                className="input-item"
                value={titleInput}
                onChange={this.changeInput}
                type="text"
              />
            </div>
            <div className="input-container">
              <label htmlFor="amount-input" className="title-description">
                AMOUNT
              </label>
              <input
                id="amount-input"
                placeholder="AMOUNT"
                className="input-item"
                type="text"
                value={amountInput}
                onChange={this.changeAmount}
              />
            </div>
            <div className="input-container">
              <label htmlFor="type-option" className="title-description">
                TYPE
              </label>
              <select
                id="type-option"
                className="input-item"
                value={typeInput}
                onChange={this.changeType}
              >
                {transactionTypeOptions.map(eachType => (
                  <option key={eachType.optionId} value={eachType.optionId}>
                    {eachType.displayText}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className="add-button">
              Add
            </button>
          </form>

          <div className="transactions-outer-container history-container">
            <h1 className="transactions-title"> History </h1>
            <ul className="unordered-list">
              <li className="each-rows">
                <p className="row-title amount"> Title </p>
                <p className="row-title amount"> Amount </p>
                <p className="row-title"> Type </p>
                <p> </p>
              </li>
              {transactions.map(eachTransaction => (
                <TransactionItem
                  key={eachTransaction.id}
                  transaction={eachTransaction}
                  deleteTransaction={this.deleteTransaction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
