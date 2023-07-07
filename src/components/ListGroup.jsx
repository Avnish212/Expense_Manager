import React, { useContext } from 'react'
import ListItem from './ListItem'
import ExpenseContext from '../context/ExpenseContext'

const ListGroup = () => {

  const {transactions} = useContext(ExpenseContext)
  return (
    <ul className='list1'>
        {
          transactions.map(transaction => <ListItem key={transaction.id} transaction={transaction}  />)
        }
    </ul>
  )
}

export default ListGroup