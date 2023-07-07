import React, { useContext, useState } from 'react'
import ExpenseContext from '../context/ExpenseContext';

const ProfileSection = () => {

    const {saveTransaction} = useContext(ExpenseContext)
    const [text, setText] = useState("");
    const [amount,setAmount] = useState("")
    const [flag, setFlag] = useState("")

    const handleSubmit= (e) =>{
        e.preventDefault()
        saveTransaction(text,amount,flag)
        setText("")
        setAmount("")
        setFlag("")
    }

    return (
        <div className="profile">
            <div className="pf1">
                <div className="pfimg">
                    <img src="src\assets\4353981.png" alt="" />
                </div>
                <div className="pfText">
                    <tr>
                        <td><h3>Name :</h3></td>
                        <td><p> Avnish Baraniya</p></td>
                    </tr>
                    <tr>
                        <td><h3>Contact :</h3></td>
                        <td><p>7894561230</p></td>
                    </tr>
                    <tr>
                        <td><h3>Address :</h3></td>
                        <td><p>21,My fake address</p></td>
                    </tr>
                </div>
            </div>
            <div className="add">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Title' value={text} onChange={(e)=>setText(e.target.value)} />
                    <input type="text" placeholder='Amount' value={amount} onChange={(e) => setAmount(e.target.value)} />
                    <select name="Expense" id='dropDown' value={flag} onChange={(e) =>setFlag(e.target.value)}>
                        <option placeholder='selected'>---Selected---</option>
                        <option value="debit">Debit</option>
                        <option value="credit">Credit</option>
                        
                    </select>
                    <button>Add item</button>
                </form>

            </div>
        </div>
    )
}

export default ProfileSection