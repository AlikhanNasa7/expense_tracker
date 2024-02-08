import React from 'react'
import Notion from './Notion'
import './History.css'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
const History = () => {
  const {transactions} = useContext(GlobalContext)
  console.log(transactions)
  return (
    <div>
        <h4>History</h4>
        <br />
        <ul type='none' className='list'>
          {transactions.map((element)=> <Notion text={element.text} value={element.value} key={element.id} id={element.id}/>)}
        </ul>
        
    </div>
  )
}

export default History