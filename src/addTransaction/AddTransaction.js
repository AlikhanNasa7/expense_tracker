import React, { useRef } from 'react'
import './AddTransaction.css'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
const AddTransaction = () => {
    const {addTransaction} = useContext(GlobalContext)
    const text = useRef('')
    const value = useRef(0)

    const addTransactionHandler = ()=>{
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text: text.current,
            value: +value.current
        }
      
        addTransaction(newTransaction);
    }
  return (
    <>
        <h4>AddTransaction</h4>
        <hr />
        <div className='adding'>
            <div className='attribute'>
                <label htmlFor='text'>Text</label>
                <input placeholder={'Enter text...'} type="text" id='text' onChange={(e)=>{text.current=e.target.value}}></input>
            </div>
            <div className='attribute'>
                <label htmlFor='number'>Amount <br />
                (negative - expense, positive - income)</label>
                <input placeholder={'Enter amount...'} type="number" step='500' id='number' onChange={(e)=>{value.current=e.target.value}}></input>
            </div>
            <button className="btn" onClick={addTransactionHandler}>Add transaction</button>
        </div>
    </>
  )
}

export default AddTransaction