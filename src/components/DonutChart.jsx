import React, { useState,useEffect, useContext } from 'react'
import Chart from 'react-apexcharts'
import ExpenseContext from '../context/ExpenseContext';

const DonutChart = () => {

  const [exp,setExp] = useState([]);

  const {transactions} = useContext(ExpenseContext)

  // console.log(exp)

  useEffect( ()=>{
    const expense = transactions.filter((transaction)=>{
      if(transaction.flag=='debit'){
        return 1;
      }
   }).reduce((p,c)=>{
    return p + c.amount;
   },0)
  
   const salary = transactions.filter((transaction1)=>{
    if(transaction1.flag=='credit'){
      return 1;
    }
   }).reduce((p,q)=>{
    return p+ q.amount;
   },0)
   setExp([expense,salary]);
  },[transactions])
 
  
 


 

  return (
    <React.Fragment>
        

        <Chart
        type='donut'
        width={400}
        height={400}

        series={exp}
        options={{
            labels:['Debited','Remaining'],
            title:{
              text:'Expenses'
            },
            plotOptions:{
              pie:{
                donut:{
                  labels:{
                    show:true,

                  }
                }
              }
            }
        }}
        />
    </React.Fragment>
  )
}

export default DonutChart