import React, { useContext } from 'react'
import LineChart from './LineChart'
import DonutChart from './DonutChart'
import ExpenseContext from '../context/ExpenseContext'

const GraphSection = () => {

  const {transactions} = useContext(ExpenseContext)

  return (
    <div className="graphSection">
      <div className="graph1">
        {/* {
          transactions.map(transaction => <LineChart key={transaction.id} transaction={transaction} />)
        } */}
        <LineChart />
      </div>
      <div className="graph2">
        {/* {
          transactions.map(transaction => <DonutChart key={transaction.id} transaction={transaction} />)
        } */}
        <DonutChart />
      </div>

    </div>
  )
}

export default GraphSection