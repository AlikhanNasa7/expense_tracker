import React from 'react'
import './IncomeExpenses.css'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
const IncomeExpenses = (props) => {
  const {transactions} = useContext(GlobalContext)
  console.log(transactions)
  console.log(typeof transactions)
  const income = transactions.reduce((acc,cur)=>{
    if (cur.value>0){
      acc+=cur.value
    }
    return acc
  },0).toFixed(2)
  const expense = transactions.reduce((acc,cur)=>{
    if (cur.value<0){
      acc+=Math.abs(cur.value)
    }
    return acc
  },0).toFixed(2)
  return (
    <div className='income-expenses'>
        <div className='income'>
          <p>INCOME</p>
          <span>${income}</span>
        </div>
        <div className='expense'>
          <p>EXPENSES</p>
          <span>${expense}</span>
        </div>
      </div>
  )
}

export default IncomeExpenses