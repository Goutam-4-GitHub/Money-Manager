// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transaction, deleteTransaction} = props
  const {id, title, amount, type} = transaction

  const onDelete = () => {
    deleteTransaction(id)
  }
  return (
    <>
      <li className="each-rows">
        <p className="history-items"> {title} </p>
        <p className="history-items"> Rs {amount} </p>
        <p className="history-items"> {type} </p>
        <button
          type="button"
          className="delete-button"
          onClick={onDelete}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </li>
    </>
  )
}
export default TransactionItem
