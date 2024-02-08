import React from 'react'
import './Balance.css'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
const Balance = () => {
  const {transactions} = useContext(GlobalContext)
  console.log(transactions)
  let totalMoney = 0;
  for (let money of transactions){
    totalMoney += money.value;
  }
  return (
    <>
        <h4>Your Balance</h4>
        <h1 id='balance'>{`$${totalMoney}`}</h1>
    </>
  )
}

export default Balance