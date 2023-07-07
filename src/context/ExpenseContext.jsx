import { createContext } from "react";
import { useState } from "react";



const ExpenseContext = createContext()



export const ExpenseProvider = ({ children }) => {


  const [transactions, setTransactions] = useState([
    {
      id: 1,
      text: "hello from context",
      flag: "any"
    }
  ]);

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id))
  }

  const saveTransaction = (text, amount, flag) => {
    const newTransaction = {
      id: crypto.randomUUID(),
      text,
      amount: parseInt(amount),
      flag,
    }
    setTransactions([newTransaction, ...transactions])
  }

  return (
    <ExpenseContext.Provider value={{ transactions, saveTransaction,
    deleteTransaction}}
    >
      {children}
    </ExpenseContext.Provider>
  )
}

export default ExpenseContext;