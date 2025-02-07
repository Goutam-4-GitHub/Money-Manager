// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balance, income, expense} = props
  return (
    <>
      <div className="each-amount-container amount-container-one">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="amount-icon"
        />
        <div className="amount-updation-container">
          <p className="total-amount" data-testid="balanceAmount">
            Rs {balance()}
          </p>
          <p className="amount-description"> Your Balance </p>
        </div>
      </div>

      <div className="each-amount-container amount-container-two">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="amount-icon"
        />
        <div className="amount-updation-container">
          <p className="total-amount" data-testid="incomeAmount">
            Rs {income()}
          </p>
          <p className="amount-description"> Your Income </p>
        </div>
      </div>

      <div className="each-amount-container amount-container-three">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="amount-icon"
        />
        <div className="amount-updation-container">
          <p className="total-amount" data-testid="expensesAmount">
            Rs {expense()}
          </p>
          <p className="amount-description"> Your Expenses </p>
        </div>
      </div>
    </>
  )
}
export default MoneyDetails