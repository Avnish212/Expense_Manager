import React, { useContext } from 'react'
import ExpenseContext from '../context/ExpenseContext'

const ListItem = ({transaction}) => {

const {deleteTransaction} = useContext(ExpenseContext)


  return (
    <>
    <li className='listI1'>
        <div className={transaction.flag == "debit" ? "partAmount" :"partAmount2"}>
        <h4>Rs. {transaction.amount}</h4>
        </div>
        <div className="partText">
        <div className="partText1">
        <h4>{transaction.text}</h4>
        </div>
        <div className="textButton"><button onClick={()=> deleteTransaction(transaction.id)}><i class="fa-solid fa-xmark"></i></button></div>
        </div>
    </li>
    {/* <li className='listI1'>
        <div className="partAmount2">
        <h4>Rs. 1865</h4>
        </div>
        <div className="partText">
        <div className="partText1">
        <h4>Car Loan Installment</h4>
        </div>
        <div className="textButton"><button><i class="fa-solid fa-xmark"></i></button></div>
        </div>
    </li>
    <li className='listI1'>
        <div className="partAmount">
        <h4>Rs. 18222</h4>
        </div>
        <div className="partText">
        <div className="partText1">
        <h4>Child Fee</h4>
        </div>
        <div className="textButton"><button><i class="fa-solid fa-xmark"></i></button></div>
        </div>
    </li>
    <li className='listI1'>
        <div className="partAmount2">
        <h4>Rs. 17222</h4>
        </div>
        <div className="partText">
        <div className="partText1">
        <h4>Holiday Trip</h4>
        </div>
        <div className="textButton"><button><i class="fa-solid fa-xmark"></i></button></div>
        </div>
    </li>
    <li className='listI1'>
        <div className="partAmount">
        <h4>Rs. 10422</h4>
        </div>
        <div className="partText">
        <div className="partText1">
        <h4>Car Servicing</h4>
        </div>
        <div className="textButton"><button><i class="fa-solid fa-xmark"></i></button></div>
        </div>
    </li>
    <li className='listI1'>
        <div className="partAmount2">
        <h4>Rs. 18522</h4>
        </div>
        <div className="partText">
        <div className="partText1">
        <h4>Bike Servicing</h4>
        </div>
        <div className="textButton"><button><i class="fa-solid fa-xmark"></i></button></div>
        </div>
    </li>
    <li className='listI1'>
        <div className="partAmount">
        <h4>Rs. 1856</h4>
        </div>
        <div className="partText">
        <div className="partText1">
        <h4>Technical Devices</h4>
        </div>
        <div className="textButton"><button><i class="fa-solid fa-xmark"></i></button></div>
        </div>
    </li>
    <li className='listI1'>
        <div className="partAmount2">
        <h4>Rs. 8522</h4>
        </div>
        <div className="partText">
        <div className="partText1">
        <h4>Furniture Bill</h4>
        </div>
        <div className="textButton"><button><i class="fa-solid fa-xmark"></i></button></div>
        </div>
    </li>
    <li className='listI1'>
        <div className="partAmount">
        <h4>Rs. 10822</h4>
        </div>
        <div className="partText">
        <div className="partText1">
        <h4>Shopping</h4>
        </div>
        <div className="textButton"><button><i class="fa-solid fa-xmark"></i></button></div>
        </div>
    </li> */}
  
  
    </>
  )
}

export default ListItem